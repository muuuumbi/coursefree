package com.a603.ofcourse.domain.member.dto;

import lombok.Getter;

@Getter
public class CoursePlaceDetails {
    private String placeCategory;
    private String name;
    private String address;
    private String imageUrl;
    private String url;

    private CoursePlaceDetails(String placeCategory, String name, String address, String imageUrl, String url) {
        this.placeCategory = placeCategory;
        this.name = name;
        this.address = address;
        this.imageUrl = imageUrl;
        this.url = url;
    }

    public static CoursePlaceDetails from(String placeCategory, String name, String address, String imageUrl, String url) {
        return new CoursePlaceDetails(placeCategory, name, address, imageUrl, url);
    }
}
