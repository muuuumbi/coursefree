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
@Table(name = "member")
public class Member {
    @Id
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