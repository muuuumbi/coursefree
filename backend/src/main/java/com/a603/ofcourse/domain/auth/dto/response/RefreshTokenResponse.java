package com.a603.ofcourse.domain.auth.dto.response;

import lombok.Getter;
import lombok.Setter;

/*
액세스 토큰 갱신 Api ResponseBody
 */
@Getter
@Setter
public class RefreshTokenResponse {
    private String accessToken;
}
