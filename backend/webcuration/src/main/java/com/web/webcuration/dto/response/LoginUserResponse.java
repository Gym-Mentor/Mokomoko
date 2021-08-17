package com.web.webcuration.dto.response;

import java.util.List;

import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.TokenDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LoginUserResponse {

    private TokenDto token;
    private User user;
    private List<MainFeedResponse> mainFeed;
}