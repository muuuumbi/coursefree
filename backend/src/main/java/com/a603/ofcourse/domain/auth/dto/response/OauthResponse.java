package com.a603.ofcourse.domain.auth.dto.response;

import lombok.Getter;
import lombok.Setter;

/*
로그인 Api ResponseBody
 */
@Getter
@Setter
public class OauthResponse {
    private String accessToken;
}
