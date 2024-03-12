package com.a603.ofcourse.domain.place.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Entity
@Table(name = "subway")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Subway {
    @Id
    @Column(name = "subway_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "lat")
    private Double lat;

    @Column(name = "lon")
    private Double lon;

    public Subway(Double lat, Double lon) {
        this.lat = lat;
        this.lon = lon;
    }
}