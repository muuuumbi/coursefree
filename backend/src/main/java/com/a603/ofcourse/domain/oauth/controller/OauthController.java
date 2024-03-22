package com.a603.ofcourse.domain.oauth.controller;

import com.a603.ofcourse.domain.oauth.redis.RefreshToken;
import com.a603.ofcourse.domain.oauth.service.JwtTokenService;
import com.a603.ofcourse.domain.oauth.service.KakaoOauthService;
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
    private final KakaoOauthService kakaoOauthService;

    /*
    작성자 : 김은비
    작성내용 : 인가코드로 kakaoAccessToken 받아온 후 인증된 사용자에 대한 액세스 토큰을 반환
     * @param String 로그인 형식 (카카오)
     * @param code (인가코드)
     * @return accessToken(JWT)
     */
    @PostMapping("/login/oauth/{provider}")
    public HttpEntity<?> login(@PathVariable String provider, @RequestBody String code){
        HttpHeaders headers = new HttpHeaders();
        switch(provider){
            case "kakao":
                //1. 인가코드로 카카오 액세스 토큰 반환
                String kakaoAccessToken = kakaoOauthService.getKakaoAccessTokenByCode(code);
                //2, 카카오 액세스 토큰으로 우리 서버 토큰 발급
                String accessToken = oauthService.loginWithKakao(kakaoAccessToken);
                //3. 헤더에 넣어서 프론트로 보내기
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
        //HttpHeaders 객체에 리프레시 토큰으로 갱신된 액세스 토큰 넣기
        HttpHeaders headers = new HttpHeaders();
        headers.set(AUTHORIZATION_HEADER, "Bearer " + oauthService.refreshAccessToken(clientAccessToken.substring(7)));

        return ResponseEntity.ok().headers(headers).body(null);
    }
}
