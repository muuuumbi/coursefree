package com.a603.ofcourse.domain.schedule.dto.request;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AddScheduleRequestDto {
    private Integer courseId;
    private String scheduleTitle;
    private String appointmentPlace;
    private LocalDateTime scheduleDate;
}
