package com.a603.ofcourse.domain.course.repository;

import com.a603.ofcourse.domain.course.domain.CourseReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseReviewRepository extends JpaRepository<CourseReview, Integer> {
}