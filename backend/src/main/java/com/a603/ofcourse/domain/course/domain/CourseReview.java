package com.a603.ofcourse.domain.course.domain;

import com.a603.ofcourse.domain.member.domain.Member;
import com.a603.ofcourse.global.domain.BaseEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Getter
@Entity
@Table(name = "course_review")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CourseReview extends BaseEntity {
    @Id
    @Column(name = "post_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Lob
    @Column(name = "content")
    private String content;
    // TODO: 게시글 수정 기능용 setter 방식 정해야함

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;

    public CourseReview(String content, Member member, Course course) {
        this.content = content;
        addRelatedMember(member);
        addRelatedCourse(course);
    }

    private void addRelatedMember(Member member) {
        this.member = member;
        member.getCourseReviewList().add(this);
    }

    private void addRelatedCourse(Course course) {
        this.course = course;
        course.getCourseReviewList().add(this);
    }
}