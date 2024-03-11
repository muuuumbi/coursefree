package com.a603.ofcourse.domain.course.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Size(max = 8)
    @Column(name = "course_category", length = 8)
    private String courseCategory;

    @Size(max = 30)
    @Column(name = "title", length = 30)
    private String title;

    @Size(max = 256)
    @Column(name = "image_url", length = 256)
    private String imageUrl;

    @Size(max = 256)
    @Column(name = "hash_key", length = 256)
    private String hashKey;

    @Size(max = 10)
    @Column(name = "represent_station", length = 10)
    private String representStation;
}