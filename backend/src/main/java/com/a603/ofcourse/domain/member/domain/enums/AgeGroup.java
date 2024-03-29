package com.a603.ofcourse.domain.member.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public enum AgeGroup {
    Teen("10대"),
    Twenty("20대"),
    Thirty("30대"),
    Forty("40대"),
    Fifty("50대"),
    Elderly("60대이상");

    private String ageGroup;
}
