package com.web.webcuration.dto.request;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class ExplorePostRequest {

    private List<Long> block;

    private Long postid;

}
