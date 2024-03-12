package com.a603.ofcourse.domain.place.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "subway")
public class Subway {
    @Id
    @Column(name = "subway_id", nullable = false)
    private Integer id;

    @Column(name = "lat")
    private Double lat;

    @Column(name = "lon")
    private Double lon;

}