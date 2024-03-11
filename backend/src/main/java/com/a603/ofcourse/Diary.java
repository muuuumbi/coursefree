package com.a603.ofcourse;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "diary")
public class Diary {
    @Id
    @Column(name = "diary_id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "schedule_place_id", nullable = false)
    private Integer schedulePlaceId;

    @Lob
    @Column(name = "diary_content")
    private String diaryContent;

}