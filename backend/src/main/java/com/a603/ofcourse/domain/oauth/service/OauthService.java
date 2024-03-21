package com.a603.ofcourse.domain.oauth.service;

import com.a603.ofcourse.domain.oauth.dto.response.RefreshTokenResponse;
import com.a603.ofcourse.domain.oauth.repository.AuthRepository;
import com.a603.ofcourse.domain.oauth.exception.OauthException;
import com.a603.ofcourse.domain.oauth.exception.OauthErrorCode;
import com.a603.ofcourse.domain.member.domain.Member;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/*
토큰 생성, 갱신 등 로그인 관련 로직 서비스
 */
@Service
@RequiredArgsConstructor
public class OauthService {
    private final JwtTokenService jwtTokenService;
    private final KakaoOauthService kakaoOauthService;
    private final AuthRepository authRepository;

    /*
    작성자 : 김은비
    작성내용 : 카카오 로그인
     * @param String
     * @param HttpServletReponse
     * @return accessToken
     */
//    public String loginWithKakao(String accessToken, HttpServletResponse response){
//        //이미 가입돼 있는 회원 or 신규회원 멤버
//        Member member = kakaoOauthService.getMemberProfileByToken(accessToken);
//
//        //accessToken 반환
//        return getTokens(member.getId(), response);
//    }
    public String loginWithKakao(String accessToken){
        //이미 가입돼 있는 회원 or 신규회원 멤버
        Member member = kakaoOauthService.getMemberProfileByToken(accessToken);

        //accessToken 반환
        return getTokens(member.getId());
    }

    /*
    작성자 : 김은비
    작성내용 : HttpServletRequest 객체에서 리프레시 토큰 추출
     * @param HttpServletRequest
     * @return refreshToken (존재하지 않으면 null)
     */
    public String extractRefreshTokenFromCookie(HttpServletRequest request) {
        //1. 요청으로부터 모든 쿠키를 가져옴
        Cookie[] cookies = request.getCookies();
        //2. 쿠키가 존재하지 않으면 null 반환
        if(cookies == null){
            return null;
        }
        //3. 쿠키 배열을 순회하며 리프레시 토큰을 찾음
        for (Cookie cookie : cookies) {
            //3-1. 이름인 refresh_token인 쿠키이면
            if ("refresh_token".equals(cookie.getName())) {
                //3-2. value 리턴
                return cookie.getValue();
            }
        }
        //4. 리프레시 토큰이 존재하지 않으면 null 반환
        return null;
    }
    /*
    작성자 : 김은비
    작성내용 : redis에서 리프레시 토큰 가져오기
     * @parma String memberId
     * @return refreshToken
     */
    public RefreshTokenResponse getRefreshTokenFromRedis(String clientAccessToken){
        //1. accessToken에서 멤버아이디 가져오기
        Integer memberId = (Integer) jwtTokenService.getPayload(clientAccessToken).get("member_id");

        //2. redis에서 리프레시 토큰 가져오기
        RefreshTokenResponse refreshTokenResponse = authRepository.findById(memberId.toString())
                //refreshToken이 없으면 에러 코드 전송
                .orElseThrow(() -> new OauthException(OauthErrorCode.INVALID_REFRESH_TOKEN));

        return refreshTokenResponse;
    }

    /*
    작성자 : 김은비
    작성내용 : 액세스 토큰, 리프레시 토큰 생성
     * @param Integer memberId
     * @param HttpServletReponse
     * @return accessToken
     */
    public String getTokens(Integer memberId){
        //1. 사용자 아이디로 액세스토큰 생성
        final String accessToken = jwtTokenService.createAccessToken(memberId);
        final String refreshToken = jwtTokenService.createRefreshToken(memberId);

        //2. 리프레시토큰 redis에 저장하기
        jwtTokenService.saveRefreshTokenToRedis(memberId, refreshToken);
        return accessToken;
    }

    /*
    작성자 : 김은비
    작성내용 : 리프레시 토큰으로 액세스토큰 새로 갱신
     * @param refreshToken
     * @return accessToken
     */
    public String refreshAccessToken(Integer memberId){
        //유저 정보로 액세스 토큰 생성
        return jwtTokenService.createAccessToken(memberId);
    }
}
