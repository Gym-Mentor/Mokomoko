package com.web.webcuration.dto.response;

import com.web.webcuration.Entity.User;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserRelationListResponse {

    private User user;

    private String state;
}
