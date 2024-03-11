package com.a603.ofcourse;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "profile")
public class Profile {
    @Id
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