package com.a603.ofcourse;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "course_review")
public class CourseReview {
    @Id
    @Column(name = "post_id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "member_id", nullable = false)
    private Integer memberId;

    @NotNull
    @Column(name = "course_id", nullable = false)
    private Integer courseId;

    @Lob
    @Column(name = "content")
    private String content;

    @Column(name = "reg_date")
    private Instant regDate;

    @Column(name = "mod_date")
    private Instant modDate;

}