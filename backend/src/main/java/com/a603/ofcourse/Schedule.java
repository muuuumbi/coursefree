package com.a603.ofcourse;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "schedule")
public class Schedule {
    @Id
    @Column(name = "schedule_id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "member_couple_id", nullable = false)
    private Integer memberCoupleId;

    @NotNull
    @Column(name = "course_id", nullable = false)
    private Integer courseId;

    @Column(name = "state")
    private Byte state;

    @Size(max = 20)
    @Column(name = "schedule_title", length = 20)
    private String scheduleTitle;

    @Size(max = 20)
    @Column(name = "appointment_place", length = 20)
    private String appointmentPlace;

    @Column(name = "shedule_date")
    private Instant sheduleDate;

}