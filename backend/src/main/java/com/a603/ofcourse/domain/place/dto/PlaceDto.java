package com.a603.ofcourse.domain.place.dto;

import com.a603.ofcourse.domain.place.domain.Place;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class PlaceDto {
    private Integer id;
    private String name;
    private String url;
    private String address;

    public static PlaceDto of(Place place) {
        return new PlaceDto(
                place.getId(),
                place.getName(),
                place.getUrl(),
                place.getAddress()
        );
    }
}
