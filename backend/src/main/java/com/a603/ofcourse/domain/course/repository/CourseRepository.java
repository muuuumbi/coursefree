package com.a603.ofcourse.domain.course.repository;

import com.a603.ofcourse.domain.course.domain.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Integer> {
}
