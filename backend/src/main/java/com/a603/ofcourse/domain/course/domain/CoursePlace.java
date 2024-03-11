package com.a603.ofcourse.domain.course.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
@Table(name = "course_place")
public class CoursePlace {
    @Id
    @Column(name = "course_place_id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "course_id", nullable = false)
    private Integer courseId;

    @NotNull
    @Column(name = "place_id2", nullable = false)
    private Integer placeId2;

}