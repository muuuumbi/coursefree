package com.a603.ofcourse;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "place")
public class Place {
    @Id
    @Column(name = "place_id", nullable = false)
    private Integer id;

    @Column(name = "lat")
    private Integer lat;

    @Column(name = "lon")
    private Integer lon;

}