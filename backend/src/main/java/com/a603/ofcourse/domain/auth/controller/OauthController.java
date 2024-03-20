package com.a603.ofcourse.domain.auth.controller;

import com.a603.ofcourse.domain.auth.dto.request.OauthRequest;
import com.a603.ofcourse.domain.auth.dto.response.RefreshTokenResponse;
import com.a603.ofcourse.domain.auth.service.OauthService;
import jakarta.servlet.http.HttpServletRequest;
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
    /*
    작성자 : 김은비
    작성내용 : 링크를 통한 커플 매칭
     * @param
     *
     */

    /*
    작성자 : 김은비
    작성내용 : 리프레시 토큰으로 액세스토큰 재발급
     * @param HttpServletRequest
     * @return RefreshTokenResponse
     */
//    public RefreshTokenResponse tokenRefresh(HttpServletRequest request){
//        //1. 새로운 액세스 토큰을 담을 객체 생성
//        RefreshTokenResponse refreshTokenResponse = new RefreshTokenResponse();
//        //2. 클라이언트에서 전송된 쿠키를 가져오기
//        Cookie[] list = request.getCookies();
//        //3. 만약 쿠키가 null이면 유효하지 않은 리프레시 토큰 에러를 발생
//        if(list == null){
//            throw new CustomException(ErrorCode.INVALID_REFRESH_TOKEN);
//        }
//        //4. 쿠키 배열에서 이름이 "refresh_token"인 쿠키를 찾기
//        Cookie refreshTokenCookie = Arrays.stream(list).filter(cookie -> cookie.getName().equals("refresh_token"))
//                .collect(Collectors.toList()).get(0);
//        //5. 가져온 리프레시 토큰 쿠키가 null이면 유효하지 않은 리프레시 토큰 에러 발생
//        if(refreshTokenCookie == null){
//            throw new CustomException(ErrorCode.INVALID_REFRESH_TOKEN);
//        }
//        //6. 새로운 액세스 토큰 생성
//        String accessToken = oauthService.refreshAccessToken(refreshTokenCookie.getValue());
//        //7. 새로운 액세스 토큰을 response 객체에 설정
//        refreshTokenResponse.setAccessToken(accessToken);
//        return refreshTokenResponse;
//    }
}
