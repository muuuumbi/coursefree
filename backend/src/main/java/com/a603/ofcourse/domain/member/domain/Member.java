package com.a603.ofcourse.domain.member.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id", nullable = false)
    private Integer id;

    @Size(max = 128)
    @Column(name = "user_id", length = 128)
    private String userId;

    @Size(max = 8)
    @Column(name = "type", length = 8)
    private String type;

    @Size(max = 8)
    @Column(name = "role", length = 8)
    private String role;

}