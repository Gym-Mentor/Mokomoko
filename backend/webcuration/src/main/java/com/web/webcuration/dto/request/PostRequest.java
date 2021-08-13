package com.web.webcuration.dto.request;

import java.util.List;

import com.web.webcuration.Entity.Post;
import com.web.webcuration.dto.ContentDto;
import com.web.webcuration.dto.TagDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class PostRequest {

    private String email;

    private boolean type;

    private boolean comment;

    private boolean like;

    private List<ContentDto> contents;

    private List<TagDto> tags;

    public Post toPost(Long userid) {
        return Post.builder().userid(userid).likeType(this.like).comType(this.comment).type(this.type).build();
    }
}
