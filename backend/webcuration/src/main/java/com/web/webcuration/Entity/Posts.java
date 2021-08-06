package com.web.webcuration.Entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
@Entity
public class Posts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "likeCnt")
    private Long likeCnt;

    @Column(name = "comCnt")
    private Long comCnt;

    @Column(name = "cratedate")
    private LocalDateTime createdate;

    @Column(name = "type")
    private boolean type;

    @Column(name = "userid")
    private Long userid;

    @Column(name = "prelike")
    private Long prelike;

    @Column(name = "image")
    private String image;

    @Column(name = "likeType")
    private boolean likeType;

    @Column(name = "comType")
    private boolean comType;

    @PrePersist
    public void prePersist() {
        this.likeCnt = this.likeCnt == null ? 0 : this.likeCnt;
        this.comCnt = this.comCnt == null ? 0 : this.comCnt;
        this.prelike = this.prelike == null ? 0 : this.prelike;
        this.createdate = this.createdate == null ? LocalDateTime.now() : this.createdate;
    }
}
