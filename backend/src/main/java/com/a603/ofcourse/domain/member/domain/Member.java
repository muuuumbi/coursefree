package com.a603.ofcourse.domain.member.domain;

import com.a603.ofcourse.domain.couple.domain.Couple;
import com.a603.ofcourse.domain.course.domain.CourseReview;
import com.a603.ofcourse.domain.course.domain.MyCourse;
import com.a603.ofcourse.domain.member.domain.enums.Role;
import com.a603.ofcourse.domain.member.domain.enums.Type;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "member")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class Member {
    @Id
    @Column(name = "member_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Size(max = 128)
    @Column(name = "user_id", length = 128)
    private String userId;

    @Enumerated(EnumType.STRING)
    @Size(max = 8)
    @Column(name = "type", length = 8)
    private Type type;

    @Enumerated(EnumType.STRING)
    @Size(max = 8)
    @Column(name = "role", length = 8)
    private Role role;

    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<MyCourse> myCourseList = new ArrayList<>();

    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<CourseReview> courseReviewList = new ArrayList<>();

    @OneToOne(mappedBy = "member")
    private Profile profile;

    @OneToOne(mappedBy = "member")
    private Couple coupleAsMember;

    @OneToOne(mappedBy = "mate")
    private Couple coupleAsMate;
}