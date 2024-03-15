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
    작성내용 : OAuth 프로바이더 (kakao)를 통해 사용자를 인증하고, 인증된 사용자에 대한 액세스 토큰을 반환
     * @param String 로그인 형식 (카카오)
     * @param OauthRequest
     * @param HttpServletResponse
     * @return OauthResponse
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
    작성내용 : 리프레시 토큰으로 액세스토큰 재발급
     * @param HttpServletRequest
     * @return RefreshTokenResponse
     */
    public RefreshTokenResponse tokenRefresh(HttpServletRequest request){
        //1. 새로운 액세스 토큰을 담을 객체 생성
        RefreshTokenResponse refreshTokenResponse = new RefreshTokenResponse();
        //2. 클라이언트에서 전송된 쿠키를 가져오기
        Cookie[] list = request.getCookies();
        //3. 만약 쿠키가 null이면 유효하지 않은 리프레시 토큰 에러를 발생
        if(list == null){
            throw new CustomException(ErrorCode.INVALID_REFRESH_TOKEN);
        }
        //4. 쿠키 배열에서 이름이 "refresh_token"인 쿠키를 찾기
        Cookie refreshTokenCookie = Arrays.stream(list).filter(cookie -> cookie.getName().equals("refresh_token"))
                .collect(Collectors.toList()).get(0);
        //5. 가져온 리프레시 토큰 쿠키가 null이면 유효하지 않은 리프레시 토큰 에러 발생
        if(refreshTokenCookie == null){
            throw new CustomException(ErrorCode.INVALID_REFRESH_TOKEN);
        }
        //6. 새로운 액세스 토큰 생성
        String accessToken = oauthService.refreshAccessToken(refreshTokenCookie.getValue());
        //7. 새로운 액세스 토큰을 response 객체에 설정
        refreshTokenResponse.setAccessToken(accessToken);
        return refreshTokenResponse;
    }
}
