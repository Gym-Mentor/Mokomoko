package com.web.webcuration.dto.response;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RelationResponse {

    private List<Long> follow;

    private List<Long> block;
}
