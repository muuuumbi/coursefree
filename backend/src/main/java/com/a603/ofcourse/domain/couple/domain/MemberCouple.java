package com.a603.ofcourse.domain.couple.domain;

import com.a603.ofcourse.domain.member.domain.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberCouple {
    @Id
    @Column(name = "member_couple_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "couple_id")
    private Couple couple;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    public MemberCouple(Couple couple, Member member){
        addRelatedCouple(couple);
        this.member = member;
    }

    private void addRelatedCouple(Couple couple){
        this.couple = couple;
        couple.getMemberCoupleList().add(this);
    }
}
