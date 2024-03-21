package com.a603.ofcourse.domain.course.service;

import com.a603.ofcourse.domain.course.domain.Course;
import com.a603.ofcourse.domain.course.domain.CourseReview;
import com.a603.ofcourse.domain.course.dto.request.AddCourseReviewRequestDto;
import com.a603.ofcourse.domain.course.dto.request.UpdateCourseReviewRequestDto;
import com.a603.ofcourse.domain.course.dto.response.CourseReviewResponseDto;
import com.a603.ofcourse.domain.course.repository.CourseRepository;
import com.a603.ofcourse.domain.course.repository.CourseReviewRepository;
import com.a603.ofcourse.domain.member.domain.Member;
import com.a603.ofcourse.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CourseReviewService {
    private final CourseReviewRepository courseReviewRepository;
    private final MemberRepository memberRepository;
    private final CourseRepository courseRepository;

    /**
     * 리뷰 작성 함수
     * @param token JWT
     * @param addCourseReviewRequestDto 작성할 리뷰 데이터
     */
    @Transactional
    public int addNewCourseReview(String token, AddCourseReviewRequestDto addCourseReviewRequestDto) {
        // TODO: 이 후 Member 쪽 구현되면 JWT에서 멤버 정보 뽑자
        // Member member = memberRepository.findById(JWTUtil.getMemberInfo(token).getId())
        //        .orElseThrow();
        Member member = memberRepository.findById(1)
                .orElseThrow();
        String authorNickname = member.getProfile().getNickname();

        Course course = courseRepository.findById(addCourseReviewRequestDto.getCourseId())
                .orElseThrow();

        return courseReviewRepository.save(CourseReview.builder()
                .authorNickname(authorNickname)
                .course(course)
                .content(addCourseReviewRequestDto.getContent())
                .build()).getId();
    }

    /**
     * 리뷰 글 전체 조회
     * @return List<CourseReviewResponseDto> 라뷰 전체 목록
     */
    public List<CourseReviewResponseDto> findCourseReviewList(int courseId) {
        return courseReviewRepository.findByCourseId(courseId).stream()
                .map(CourseReview::toResponse)
                .toList();
    }

    /**
     * 리뷰 수정 함수
     * @param updateCourseReviewRequestDto 수정할 리뷰 데이터
     */
    @Transactional
    public void updateCourseReview(UpdateCourseReviewRequestDto updateCourseReviewRequestDto) {
        // 업데이트할 리뷰 조회
        CourseReview courseReview = courseReviewRepository.findById(updateCourseReviewRequestDto.getId())
                .orElseThrow();

        // 더티 체크 활용
        courseReview.updateContent(updateCourseReviewRequestDto.getContent());
    }

    /**
     * 리뷰 삭제 함수
     * @param id    삭제할 리뷰 ID
     */
    @Transactional
    public void deleteCourseReview(Integer id) {
        courseReviewRepository.deleteById(id);
    }
}