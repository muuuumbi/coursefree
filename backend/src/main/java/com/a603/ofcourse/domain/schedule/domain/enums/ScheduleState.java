package com.a603.ofcourse.domain.schedule.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ScheduleState {
    COMPLETE("complete"),
    TODO("todo");

    private final String description;
}
