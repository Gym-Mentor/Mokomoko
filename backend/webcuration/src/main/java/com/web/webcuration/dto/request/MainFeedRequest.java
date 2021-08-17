package com.web.webcuration.dto.request;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MainFeedRequest {

    private List<Long> follow;

    private Long postid;
}
