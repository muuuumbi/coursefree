package com.a603.ofcourse.domain.schedule.controller;

import com.a603.ofcourse.domain.schedule.dto.request.AddScheduleRequestDto;
import com.a603.ofcourse.domain.schedule.dto.request.UpdateScheduleRequestDto;
import com.a603.ofcourse.domain.schedule.dto.response.ScheduleListResponseDto;
import com.a603.ofcourse.domain.schedule.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ScheduleController {
    private static final String AUTHORIZATION = "Authorization";
    private final ScheduleService scheduleService;

    @PostMapping("/schedule")
    public ResponseEntity<Integer> addNewSchedule(
            @RequestHeader(AUTHORIZATION) String token,
            @RequestBody AddScheduleRequestDto addScheduleRequestDto
    ) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(scheduleService.addNewSchedule(token, addScheduleRequestDto));
    }

    @GetMapping("/schedules")
    public ResponseEntity<ScheduleListResponseDto> findScheduleList (
            @RequestHeader(AUTHORIZATION) String token,
            @RequestParam int month
    ) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(scheduleService.findScheduleList(token, month));
    }

    @PutMapping("schedule")
    public ResponseEntity<Void> updateSchedule(
            @RequestHeader(AUTHORIZATION) String token,
            @RequestBody UpdateScheduleRequestDto updateScheduleRequestDto
    ) {
        scheduleService.updateSchedule(updateScheduleRequestDto);
        return ResponseEntity
                .status(HttpStatus.OK)
                .build();
    }
}
