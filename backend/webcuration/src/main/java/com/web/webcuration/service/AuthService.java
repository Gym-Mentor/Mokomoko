package com.web.webcuration.service;

import com.web.webcuration.dto.TokenDto;
import com.web.webcuration.dto.request.TokenRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.UserResponse;

public interface AuthService {
    
    UserResponse signup(UserRequest userRequest);

    TokenDto login(UserRequest userRequest);

    TokenDto reissue(TokenRequest tokenReuqest);
}
