package com.a603.ofcourse.domain.member.domain;

import com.a603.ofcourse.domain.member.domain.enums.AgeGroup;
import com.a603.ofcourse.domain.member.domain.enums.Gender;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.Arrays;

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

    @Size(max = 8)
    @Column(name = "age_group", length = 8)
    private AgeGroup ageGroup;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Size(max = 256)
    @Column(name = "image", length = 256)
    private String image;

    private String memberVector;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    public Profile(
            String nickname,
            AgeGroup ageGroup,
            Gender gender,
            String image,
            String memberVector,
            Member member) {
        this.nickname = nickname;
        this.ageGroup = ageGroup;
        this.gender = gender;
        this.image = image;
        this.memberVector = memberVector;
        this.member = member;
    }

    public Double[] getDoubleVector() {
        return Arrays.stream(this.getMemberVector().split(","))
                .map(Double::valueOf)
                .toArray(Double[]::new);
    }
}