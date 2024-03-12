package com.a603.ofcourse.domain.schedule.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "picture")
public class Picture {
    @Id
    @Column(name = "picture_id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "schedule_place_id", nullable = false)
    private Integer schedulePlaceId;

    @Size(max = 256)
    @Column(name = "url", length = 256)
    private String url;

}