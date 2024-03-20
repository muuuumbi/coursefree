package com.a603.ofcourse.domain.course.controller;

import com.a603.ofcourse.domain.course.dto.request.AddCourseReviewRequestDto;
import com.a603.ofcourse.domain.course.dto.request.UpdateCourseReviewRequestDto;
import com.a603.ofcourse.domain.course.dto.response.CourseReviewResponseDto;
import com.a603.ofcourse.domain.course.service.CourseReviewService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/course-review")
public class CourseReviewController {
    private final CourseReviewService courseReviewService;

    @PostMapping("/write")
    public ResponseEntity<Integer> addNewCourseReview(@RequestBody AddCourseReviewRequestDto addCourseReviewRequestDto) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(courseReviewService.addNewCourseReview(addCourseReviewRequestDto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseReviewResponseDto> findReviewById(@PathVariable Integer id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(courseReviewService.findReviewById(id));
    }

    @GetMapping()
    public ResponseEntity<?> findAll() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(courseReviewService.findAll());
    }

    @PutMapping()
    public ResponseEntity<?> updateCourseReview(@RequestBody UpdateCourseReviewRequestDto updateCourseReviewRequestDto) {
        courseReviewService.updateCourseReview(updateCourseReviewRequestDto);
        return ResponseEntity
                .status(HttpStatus.OK)
                .build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCourseReview(@PathVariable Integer id) {
        courseReviewService.deleteCourseReview(id);
        return ResponseEntity
                .status(HttpStatus.OK)
                .build();
    }
}
