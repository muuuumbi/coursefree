package com.a603.ofcourse.domain.schedule.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "schedule_place")
public class SchedulePlace {
    @Id
    @Column(name = "schedule_place_id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "schedule_id", nullable = false)
    private Integer scheduleId;

    @NotNull
    @Column(name = "place_id", nullable = false)
    private Integer placeId;

}