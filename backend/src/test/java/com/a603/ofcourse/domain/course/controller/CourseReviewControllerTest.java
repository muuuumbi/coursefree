package com.a603.ofcourse.domain.course.controller;

import com.a603.ofcourse.domain.course.dto.request.AddCourseReviewRequestDto;
import com.a603.ofcourse.domain.course.dto.response.CourseReviewResponseDto;
import com.a603.ofcourse.domain.course.service.CourseReviewService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;

@ExtendWith(MockitoExtension.class)
class CourseReviewControllerTest {

    @Mock
    private CourseReviewService courseReviewService;

    @InjectMocks
    private CourseReviewController courseReviewController;

    private MockMvc mockMvc;

    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * mockMVC 컨트럴로 객체로 초기화
     */
    @BeforeEach
    void initMockMVC() {
        mockMvc = MockMvcBuilders
                .standaloneSetup(courseReviewController)
                .build();
    }

    @Test
    @DisplayName("리뷰 작성 테스트")
    void addNewCourseReview() throws Exception {
        // given
        String request = objectMapper.writeValueAsString(AddCourseReviewRequestDto.builder()
                .courseId(1)
                .content("test")
                .build());

        // stub
        BDDMockito.given(courseReviewService.addNewCourseReview(BDDMockito.any())).willReturn(BDDMockito.anyInt());

        // when
        mockMvc.perform(MockMvcRequestBuilders.post("/api/course-review/write")
                .contentType(MediaType.APPLICATION_JSON)
                .content(request)
                        .with(csrf()))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andReturn();

        // then
        BDDMockito.verify(courseReviewService).addNewCourseReview(BDDMockito.any());
    }

    @Test
    @DisplayName("리뷰 조회 테스트")
    void findReviewById() throws Exception {
        // given
        CourseReviewResponseDto response = CourseReviewResponseDto.builder()
                .id(1)
                .authorNickname("test")
                .content("test")
                .regDate(LocalDateTime.of(2024, 3, 20, 9, 12))
                .build();

        // stub
        BDDMockito.given(courseReviewService.findReviewById(1)).willReturn(response);

        // when
        mockMvc.perform(MockMvcRequestBuilders.get("/api/course-review/1")
                        .with(csrf()))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string(objectMapper.writeValueAsString(response)));

        // then
        BDDMockito.verify(courseReviewService).findReviewById(1);
    }

    @Test
    void findAll() {

    }

    @Test
    void updateCourseReview() {
    }

    @Test
    void deleteCourseReview() {
    }
}