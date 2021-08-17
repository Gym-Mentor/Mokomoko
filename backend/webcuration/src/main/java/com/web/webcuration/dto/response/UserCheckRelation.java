package com.web.webcuration.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserCheckRelation {

    private boolean isFollow;

    private Long followCnt;
}
