package com.a603.ofcourse.domain.schedule.service;

import com.a603.ofcourse.domain.couple.domain.Couple;
import com.a603.ofcourse.domain.couple.repository.MemberCoupleRepository;
import com.a603.ofcourse.domain.course.domain.Course;
import com.a603.ofcourse.domain.course.exception.CourseErrorCode;
import com.a603.ofcourse.domain.course.exception.CourseException;
import com.a603.ofcourse.domain.course.repository.CourseRepository;
import com.a603.ofcourse.domain.member.exception.MemberErrorCode;
import com.a603.ofcourse.domain.member.exception.MemberException;
import com.a603.ofcourse.domain.oauth.service.JwtTokenService;
import com.a603.ofcourse.domain.schedule.domain.Schedule;
import com.a603.ofcourse.domain.schedule.dto.request.AddScheduleRequestDto;
import com.a603.ofcourse.domain.schedule.dto.request.UpdateScheduleRequestDto;
import com.a603.ofcourse.domain.schedule.dto.response.ScheduleListResponseDto;
import com.a603.ofcourse.domain.schedule.exception.ScheduleErrorCode;
import com.a603.ofcourse.domain.schedule.exception.ScheduleException;
import com.a603.ofcourse.domain.schedule.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class ScheduleService {
    private final ScheduleRepository scheduleRepository;
    private final MemberCoupleRepository memberCoupleRepository;
    private final CourseRepository courseRepository;
    private final JwtTokenService jwtTokenService;

    @Transactional
    public Integer addNewSchedule(String token, AddScheduleRequestDto addScheduleRequestDto) {
        // get memberId from JWT
        Integer memberId = (Integer) jwtTokenService.getPayload(token).get("member_id");

        // get couple from MemberCouple table
        Couple couple = memberCoupleRepository.findByMemberId(memberId)
                .orElseThrow(() -> new MemberException(MemberErrorCode.MEMBER_DOES_NOT_EXISTS))
                .getCouple();

        // get course by courseId
        Course course = courseRepository.findById(addScheduleRequestDto.getCourseId())
                        .orElseThrow(() -> new CourseException(CourseErrorCode.COURSE_NOT_EXIST));

        // save new Schedule
        return scheduleRepository.save(Schedule.builder()
                .scheduleTitle(addScheduleRequestDto.getScheduleTitle())
                .appointmentPlace(addScheduleRequestDto.getAppointmentPlace())
                .scheduleDate(addScheduleRequestDto.getScheduleDate())
                .course(course)
                .couple(couple)
                .build()).getId();
    }

    public ScheduleListResponseDto findScheduleList(String token, int month) {
        // get couple id
        int coupleId = jwtTokenService.getCoupleId(token);

        // get schedules by coupleId and month
        return ScheduleListResponseDto.builder()
                .scheduleDetailResponseDtoList(
                        scheduleRepository.findSchedulesByCoupleIdAndAndScheduleDate_Month(coupleId, month).stream()
                                .map(Schedule::toResponse)
                                .toList()
                ).build();
    }

    @Transactional
    public void updateSchedule(UpdateScheduleRequestDto updateScheduleRequestDto) {
        Schedule schedule = scheduleRepository.findById(updateScheduleRequestDto.getScheduleId())
                .orElseThrow(() -> new ScheduleException(ScheduleErrorCode.SCHEDULE_NOT_EXIST));

        // if course is changed
        if(!schedule.getCourse().getId().equals(updateScheduleRequestDto.getCourseId()))
            schedule.setCourse(courseRepository.findById(updateScheduleRequestDto.getCourseId())
                    .orElseThrow(() -> new CourseException(CourseErrorCode.COURSE_NOT_EXIST)));

        schedule.update(updateScheduleRequestDto);
    }

    @Transactional
    public void deleteSchedule(int scheduleId) {
        scheduleRepository.deleteById(scheduleId);
    }
}
