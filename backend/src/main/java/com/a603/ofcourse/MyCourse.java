package com.a603.ofcourse;

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
@Table(name = "my_course")
public class MyCourse {
    @Id
    @Column(name = "my_course_id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "member_id", nullable = false)
    private Integer memberId;

    @NotNull
    @Column(name = "course_id", nullable = false)
    private Integer courseId;

}