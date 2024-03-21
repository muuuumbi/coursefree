package com.a603.ofcourse.domain.place.dto.request;

import com.a603.ofcourse.domain.place.domain.PlaceCategory;
import com.a603.ofcourse.global.domain.Points;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class SearchPlaceByPointsRequestDto {
    private PlaceCategory placeCategory;
    private Points centerPoints;
    private Double limitDist;
}
