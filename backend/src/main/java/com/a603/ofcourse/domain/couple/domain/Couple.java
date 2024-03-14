package com.a603.ofcourse.domain.couple.domain;

import com.a603.ofcourse.domain.member.domain.Member;
import com.a603.ofcourse.domain.place.domain.PlaceReview;
import com.a603.ofcourse.domain.schedule.domain.Schedule;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Getter
@Entity
@Table(name = "couple")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Couple {
    @Id
    @Column(name = "member_couple_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Size(max = 10)
    @Column(name = "couple_nickname", length = 10)
    private String coupleNickname;

    @Column(name = "d_day")
    private Integer dDay;

    @OneToMany(mappedBy = "couple", fetch = FetchType.LAZY)
    private List<Schedule> scheduleList = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mate_id")
    private Member mate;

    public Couple(
            String coupleNickname,
            Integer dDay,
            Member member,
            Member mate) {
        this.coupleNickname = coupleNickname;
        this.dDay = dDay;
        this.member = member;
        this.mate = mate;
    }
}