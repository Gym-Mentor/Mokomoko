package com.web.webcuration.dto.request;

import java.util.List;

import com.web.webcuration.dto.ContentDto;
import com.web.webcuration.dto.TagDto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostRequest {

    private String email;

    private boolean type;

    private boolean likeType;

    private boolean comType;

    private List<ContentDto> contents;

    private List<TagDto> tag;

}
