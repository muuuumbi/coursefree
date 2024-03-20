package com.a603.ofcourse.domain.auth.service;

import com.a603.ofcourse.domain.auth.dto.KakaoInfo;
import com.a603.ofcourse.domain.member.domain.Member;
import com.a603.ofcourse.domain.member.domain.enums.Role;
import com.a603.ofcourse.domain.member.domain.enums.Type;
import com.a603.ofcourse.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;
import java.util.Optional;

/*
카카오 AccessToken으로 유저 정보 가져와서 DB에 저장
 */
@RequiredArgsConstructor
@Service
public class KakaoOauthService {
    private final MemberRepository memberRepository;

    /*
    작성자 : 김은비
    작성내용 : AccessToken을 사용하여 KaKao API의 사용자 정보 엔드포인트를 호출하고, 응답 본문을 Map<String, Object>로 변환하여 반환
     * @param String accessToken
     * @return Map<String, Object>
     */
    public Map<String, Object> getMemberAttributesByToken(String accessToken){
        //1. WebClient 생성 -> 리액티브 웹 요청을 만들고 소비할 수 있는 클라이언트
        return WebClient.create()
                //2. HTTP GET 요청을 설정
                .get()
                //3. 요청할 URI 설정 -> KaKao API의 사용자 정보를 가져오는 엔드포인트
                .uri("https://kapi.kakao.com/v2/user/me")
                //4. 요청에 헤더를 추가하여 인증 처리.(액세스 토큰을 Bearer 토근으로 설정하여 인증 수행)
                .headers(httpHeaders -> httpHeaders.setBearerAuth(accessToken))
                //5. 설정된 요청을 실행하고 응답을 받음
                .retrieve()
                //6. 응답 본문을 Mono(0 또는 1개의 요소를 갖는 비동기 시퀀스)로 변환. 여기서는 Map<String, Object> 타입으로 변환
                .bodyToMono(new ParameterizedTypeReference<Map<String, Object>>() {})
                //7. Mono의 값을 동기적으로 블록킹하여 결과를 반환
                .block();
    }

    /*
    작성자 : 김은비
    작성내용 : 카카오API에서 가져온 유저정보를 이미 회원이면 그냥 반환, 아직 회원이 아니면 DB에 저장
     * @param String accest
     * @return Member
     */
    public Member getMemberProfileByToken(String accessToken){
        Map<String, Object> memberAttributesByToken = getMemberAttributesByToken(accessToken);
        KakaoInfo kakaoInfo = new KakaoInfo(memberAttributesByToken);
        Long longSocialId = kakaoInfo.getId();
        Optional<Member> member = memberRepository.findBySocialId(longSocialId);
        //회원이면 반환, 회원 아니면 DB저장 후 반환
        return member.orElseGet(() -> memberRepository.save(Member.builder()
                .socialId(longSocialId)
                .type(Type.KAKAO)
                .role(Role.MEMBER)
                .build()));
    }
}
