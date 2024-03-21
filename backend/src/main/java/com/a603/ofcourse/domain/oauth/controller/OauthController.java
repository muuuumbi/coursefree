package com.a603.ofcourse.domain.oauth.controller;

import com.a603.ofcourse.domain.oauth.dto.response.RefreshTokenResponse;
import com.a603.ofcourse.domain.oauth.service.OauthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("")
@Slf4j
public class OauthController {
    public static final String AUTHORIZATION_HEADER = "Authorization";
    private final OauthService oauthService;

    /*
    작성자 : 김은비
    작성내용 : OAuth 프로바이더 (kakao)를 통해 사용자를 인증하고, 인증된 사용자에 대한 액세스 토큰을 반환
     * @param String 로그인 형식 (카카오)
     * @param kakaoAccessToken
     * @return accessToken(JWT)
     */
    @PostMapping("/login/oauth/{provider}")
    public HttpEntity<?> login(@PathVariable String provider, @RequestHeader(AUTHORIZATION_HEADER) String kakaoAccessToken){
        System.out.println("로그인 메서드 실행" + kakaoAccessToken);
        log.trace("kakaoAccessToken = {}", kakaoAccessToken);
        HttpHeaders headers = new HttpHeaders();
        switch(provider){
            case "kakao":
                //loginResponse에는 refreshToken이 저장됨.
                String accessToken = oauthService.loginWithKakao(kakaoAccessToken.substring(7));
                headers.set(AUTHORIZATION_HEADER, "Bearer " + accessToken);
                break;
            //provider가 지정되지 않은 경우
            default:
                return ResponseEntity.badRequest().body(null);
        }

        return ResponseEntity.ok().headers(headers).body(null);
    }

    /*
    작성자 : 김은비
    작성내용 : 자동로그인
     * @param clientAccessToken
     * return 갱신된 accesToken
     */
    @PostMapping("/auto-login")
    public HttpEntity<?> autoLogin(@RequestHeader(AUTHORIZATION_HEADER) String clientAccessToken){
        //1. redis에서 리프레시 토큰을 가져옴
        RefreshTokenResponse refreshTokenResponse = oauthService.getRefreshTokenFromRedis(clientAccessToken.substring(7));
        //2. 리프레시 토큰을 사용하여 액세스 토큰을 갱신하고 액세스 토큰을 반환
        String accessToken = oauthService.refreshAccessToken(refreshTokenResponse.getMemberId());
        //3. HttpHeaders 객체
        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION_HEADER, "Bearer " + accessToken);

        return ResponseEntity.ok().headers(headers).body(null);
    }
}
