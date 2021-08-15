package com.web.webcuration.dto.request;

import com.web.webcuration.Entity.Likes;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class LikeRequest {

    private Long userid;

    private Long postid;

    public Likes toLikes() {
        return Likes.builder().userid(this.userid).postid(this.postid).build();
    }

}
