package com.a603.ofcourse.domain.couple.domain;

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
@Table(name = "member_couple")
public class Couple {
    @Id
    @Column(name = "member_couple_id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "member_id", nullable = false)
    private Integer memberId;

    @NotNull
    @Column(name = "mate_id", nullable = false)
    private Integer mateId;

    @Size(max = 10)
    @Column(name = "couple_nickname", length = 10)
    private String coupleNickname;

    @Column(name = "d_day")
    private Integer dDay;

}