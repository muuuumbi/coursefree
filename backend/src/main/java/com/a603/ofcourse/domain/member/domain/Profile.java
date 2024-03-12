package com.a603.ofcourse.domain.member.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "profile_id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "member_id", nullable = false)
    private Integer memberId;

    @Size(max = 10)
    @Column(name = "nickname", length = 10)
    private String nickname;

    @Size(max = 8)
    @Column(name = "age_range", length = 8)
    private String ageRange;

    @Size(max = 8)
    @Column(name = "mbti", length = 8)
    private String mbti;

    @Size(max = 256)
    @Column(name = "image", length = 256)
    private String image;

}