package com.a603.ofcourse.domain.schedule.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ScheduleState {
    Enabled("활성화"),
    Disabled("비활성화");

    private String description;
}
