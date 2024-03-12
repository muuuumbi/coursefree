package com.a603.ofcourse.domain.member.domain;

import com.a603.ofcourse.domain.course.domain.CourseReview;
import com.a603.ofcourse.domain.course.domain.MyCourse;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "member")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {
    @Id
    @Column(name = "member_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Size(max = 128)
    @Column(name = "user_id", length = 128)
    private String userId;

    @Size(max = 8)
    @Column(name = "type", length = 8)
    private String type;

    @Size(max = 8)
    @Column(name = "role", length = 8)
    private String role;

    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<MyCourse> myCourseList = new ArrayList<>();

    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<CourseReview> courseReviewList = new ArrayList<>();
}