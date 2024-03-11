package com.a603.ofcourse;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "course")
public class Course {
    @Id
    @Column(name = "course_id", nullable = false)
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