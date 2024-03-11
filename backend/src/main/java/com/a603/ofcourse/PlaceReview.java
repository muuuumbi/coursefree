package com.a603.ofcourse;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "place_review")
public class PlaceReview {
    @Id
    @Column(name = "place_review_id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "place_id", nullable = false)
    private Integer placeId;

    @Lob
    @Column(name = "content")
    private String content;

    @Column(name = "reg_date")
    private Instant regDate;

    @Column(name = "mod_date")
    private Instant modDate;

}