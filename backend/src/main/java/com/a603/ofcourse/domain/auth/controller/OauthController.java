package com.a603.ofcourse.domain.auth.controller;

import com.a603.ofcourse.domain.auth.dto.request.OauthRequest;
import com.a603.ofcourse.domain.auth.dto.response.OauthResponse;
import com.a603.ofcourse.domain.auth.dto.response.RefreshTokenResponse;
import com.a603.ofcourse.domain.auth.service.OauthService;
import com.a603.ofcourse.domain.exception.CustomException;
import com.a603.ofcourse.domain.exception.ErrorCode;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("")
public class OauthController {
    private final OauthService oauthService;

    /*
    작성자 : 김은비
    작성일자 : 2024-03-13
    작성내용 : OAuth 프로바이더 (kakao)를 통해 사용자를 인증하고, 인증된 사용자에 대한 액세스 토큰을 반환
     */
    @PostMapping("/login/oauth/{provider}")
    public OauthResponse login(@PathVariable String provider, @RequestBody OauthRequest oauthRequest,
                               HttpServletResponse response){
        OauthResponse oauthResponse = new OauthResponse();
        switch(provider){
            case "kakao":
                String accessToken = oauthService.loginWithKakao(oauthRequest.getAccessToken(), response);
                //반환된 액세스 토큰 설정하기
                oauthResponse.setAccessToken(accessToken);
        }
        return oauthResponse;
    }

    /*
    작성자 : 김은비
    작성일자 : 2024-03-13
    작성내용 : 리프레시 토큰으로 액세스토큰 재발급
     */
    public RefreshTokenResponse tokenRefresh(HttpServletRequest request){
        RefreshTokenResponse refreshTokenResponse = new RefreshTokenResponse();
        Cookie[] list = request.getCookies();
        if(list == null){
            throw new CustomException(ErrorCode.INVALID_REFRESH_TOKEN);
        }

        Cookie refreshTokenCookie = Arrays.stream(list).filter(cookie -> cookie.getName().equals("refresh_token"))
                .collect(Collectors.toList()).get(0);

        if(refreshTokenCookie == null){
            throw new CustomException(ErrorCode.INVALID_REFRESH_TOKEN);
        }

        String accessToken = oauthService.refreshAccessToken(refreshTokenCookie.getValue());
        refreshTokenResponse.setAccessToken(accessToken);
        return refreshTokenResponse;
    }
}
