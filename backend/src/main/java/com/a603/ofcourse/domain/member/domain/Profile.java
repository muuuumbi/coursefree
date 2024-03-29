package com.a603.ofcourse.domain.member.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Entity
@Table(name = "profile")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Profile {
    @Id
    @Column(name = "profile_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Size(max = 10)
    @Column(name = "nickname", length = 10)
    private String nickname;

    @Size(max = 256)
    @Column(name = "image", length = 256)
    private String image;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    public Profile(
            String nickname,
            String image,
            Member member) {
        this.nickname = nickname;
        this.image = image;
        this.member = member;
    }
}