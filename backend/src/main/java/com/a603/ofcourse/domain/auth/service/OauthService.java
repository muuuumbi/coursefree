package com.a603.ofcourse.domain.auth.service;

import com.a603.ofcourse.domain.exception.CustomException;
import com.a603.ofcourse.domain.exception.ErrorCode;
import com.a603.ofcourse.domain.member.domain.Member;
import com.a603.ofcourse.domain.member.exception.MemberErrorCode;
import com.a603.ofcourse.domain.member.exception.MemberException;
import com.a603.ofcourse.domain.member.repository.MemberRepository;
import com.a603.ofcourse.domain.member.service.MemberService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/*
토큰 생성, 갱신 등 로그인 관련 로직 서비스
 */
@Service
@RequiredArgsConstructor
public class OauthService {
    private final MemberRepository memberRepository;
    private final JwtTokenService jwtTokenService;
    private final KakaoOauthService kakaoOauthService;

    /*
    작성자 : 김은비
    작성일자 : 2024-03-13
    작성내용 : 카카오 로그인
     */
    public String loginWithKakao(String accessToken, HttpServletResponse response){
        //이미 가입돼 있는 회원 or 신규회원 멤버
        Member member = kakaoOauthService.getMemberProfileByToken(accessToken);
        //accessToken 반환
        return getTokens(member.getId(), response);
    }

    /*
    작성자 : 김은비
    작성일자 : 2024-03-13
    작성내용 : 액세스 토큰, 리프레시 토큰 생성
     */
    public String getTokens(Integer memberId, HttpServletResponse response){
        //1. 사용자 아이디로 액세스토큰 생성
        final String accessToken = jwtTokenService.createAccessToken(memberId.toString());
        final String refreshToken = jwtTokenService.createRefreshToken();

        Member member = memberRepository.findById(memberId).get();
        /*
        유저에 리프레시 토큰 설정해주기
         */

        jwtTokenService.addRefreshTokenToCookie(refreshToken, response);
        return accessToken;
    }

    /*
    작성자 : 김은비
    작성일자 : 2024-03-13
    작성내용 : 리프레시 토큰으로 액세스토큰 새로 갱신
     */
    public String refreshAccessToken(String refreshToken){

        /*
        리프래시 토큰으로 유저 정보 받아오고 만약 유저가 없다면 이용불가한 리프레싵 토큰 오류 호출
         */

        if(!jwtTokenService.validateToken(refreshToken)){
            throw new CustomException(ErrorCode.INVALID_REFRESH_TOKEN);
        }
        //유저 정보로 액세스 토큰 생성
        return jwtTokenService.createAccessToken();
    }

}
