package com.web.webcuration.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long uid;

    private String email;
    private String password;
    private String nickname;

    @Column(insertable = false, updatable = false)
    private LocalDateTime createDate;

    private String phone;
    private int prelike;
    private String image;
    private String desc;

}
