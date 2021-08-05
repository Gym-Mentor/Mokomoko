package com.web.webcuration.service;

import com.web.webcuration.dto.request.AuthMailCode;
import com.web.webcuration.dto.request.SNSRequest;
import com.web.webcuration.dto.request.TokenRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;

public interface AuthService {

    BaseResponse signup(UserRequest userRequest);

    BaseResponse logout(String email);

    BaseResponse login(UserRequest userRequest);

    BaseResponse reissue(TokenRequest tokenReuqest);

    BaseResponse sendAuthMail(String email);

    BaseResponse authMail(AuthMailCode authMailCode);

    BaseResponse findPassword(String email);

    BaseResponse authFindPassword(AuthMailCode authMailCode);

    BaseResponse authSNSLogin(SNSRequest snsRequest);
}
