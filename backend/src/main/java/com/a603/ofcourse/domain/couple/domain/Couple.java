package com.a603.ofcourse.domain.couple.domain;

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

    @OneToMany(mappedBy = "couple", fetch = FetchType.LAZY)
    private List<Schedule> scheduleList = new ArrayList<>();

}