package com.a603.ofcourse.domain.oauth.dto.response;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

/*
액세스 토큰 갱신 Api ResponseBody
 */
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
//redis에 refreshToken이란 이름으로 604800초 동안 저장됨
@RedisHash(value = "refreshToken", timeToLive = 604800)
public class RefreshTokenResponse {
    @Id
    private Integer memberId;

    private String refreshToken;
    @Builder
    public RefreshTokenResponse(Integer memberId, String refreshToken){
        this.memberId = memberId;
        this.refreshToken = refreshToken;
    }
}
