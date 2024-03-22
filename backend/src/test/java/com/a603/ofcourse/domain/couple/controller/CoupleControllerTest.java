package com.a603.ofcourse.domain.couple.controller;

import com.a603.ofcourse.domain.couple.service.CoupleService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CoupleController.class)
class CoupleControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CoupleService coupleService;

    @Test
    void connectCoupleWithMember() throws Exception{
        //Given
        String uuid = "bfcbec3366724859b697d89ede373da0";
        String accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJfaWQiOjEsImlhdCI6MTcxMTA4NzY1MSwiZXhwIjoxNzExMDg3NjU1fQ.cZND5Nva7OuAYueXswgltDTnd7P9zaMBSGs2oZdjHsY";

        //when, then
        mockMvc.perform(post("/connect/exist/{UUID}", uuid)
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", accessToken))
                .andExpect(status().isOk());
    }
}