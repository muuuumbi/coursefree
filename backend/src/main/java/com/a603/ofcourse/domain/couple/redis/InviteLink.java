package com.a603.ofcourse.domain.couple.redis;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@RedisHash(value = "inviteLink", timeToLive = 86400)
public class InviteLink {
    @Id
    private String uuid;

    private Integer memberId;

    @Builder
    public InviteLink(String uuid, Integer memberId) {
        this.uuid = uuid;
        this.memberId = memberId;
    }
}
