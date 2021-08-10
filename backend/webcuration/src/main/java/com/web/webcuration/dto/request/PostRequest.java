package com.web.webcuration.dto.request;

import java.util.List;

import com.web.webcuration.dto.ContentDto;
import com.web.webcuration.dto.PostSetting;
import com.web.webcuration.dto.TagDto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostRequest {

    private String email;

    private boolean type;

    private PostSetting setting;

    private List<ContentDto> contents;

    private List<TagDto> tag;

    // public static Posts toPost(PostRequest postRequest) {
    // return Posts.builder().us
    // }

}
