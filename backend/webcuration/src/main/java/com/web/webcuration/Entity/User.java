package com.web.webcuration.Entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "user")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DynamicInsert
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private String nickname;

    @Column(insertable = false, updatable = false)
    private LocalDateTime createdate;

    private Long prelikecnt;

    private String image;

    private String introduce;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    public String getAuthority() {
        return this.authority.name();
    }

    @PrePersist
    public void prePersist() {
        System.out.println("userprePersist");
        this.createdate = LocalDateTime.now();
        this.prelikecnt = this.prelikecnt == null ? 0 : this.prelikecnt;
        this.image = this.image == null ? "user_img.png" : this.image;
    }

}
