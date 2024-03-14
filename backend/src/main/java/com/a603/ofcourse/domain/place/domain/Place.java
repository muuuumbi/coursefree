package com.a603.ofcourse.domain.place.domain;

import com.a603.ofcourse.domain.course.domain.CoursePlace;
import com.a603.ofcourse.domain.schedule.domain.SchedulePlace;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "place")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Place {
    @Id
    @Column(name = "place_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "lat")
    private Double lat;

    @Column(name = "lon")
    private Double lon;

    @OneToMany(mappedBy = "place", fetch = FetchType.LAZY)
    private List<CoursePlace> coursePlaceList = new ArrayList<>();

    @OneToMany(mappedBy = "place", fetch = FetchType.LAZY)
    private List<PlaceReview> placeReviewList = new ArrayList<>();

    @OneToMany(mappedBy = "place", fetch = FetchType.LAZY)
    private List<SchedulePlace> schedulePlaceList = new ArrayList<>();

    public Place(Double lat, Double lon) {
        this.lat = lat;
        this.lon = lon;
    }
}