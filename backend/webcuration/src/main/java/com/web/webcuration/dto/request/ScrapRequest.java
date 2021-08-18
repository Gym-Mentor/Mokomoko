package com.web.webcuration.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ScrapRequest {

    private Long userid;

    private Long postid;
}
