package com.a603.ofcourse.domain.course.controller;

import com.a603.ofcourse.domain.course.dto.request.AddCourseRequestDto;
import com.a603.ofcourse.domain.course.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/course")
public class CourseController {
    private final CourseService courseService;

    @PostMapping("/add")
    public ResponseEntity<Integer> addCourse(@RequestBody AddCourseRequestDto requestDto) {
        Integer newCourseId = courseService.addCourse(requestDto);
        return ResponseEntity.ok(newCourseId);
    }
}
