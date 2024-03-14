package com.a603.ofcourse.domain.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Map;

/*
카카오 Api로 정보를 가져와서 담을 Dto
 */
@Getter
@AllArgsConstructor
public class KakaoInfo {
    private Long id;
    private String email;

    public KakaoInfo(Map<String, Object> attributes){
        this.id = Long.valueOf(attributes.get("id").toString());
        this.email = attributes.get("email") != null ? attributes.get("email").toString() : "";
    }
}
