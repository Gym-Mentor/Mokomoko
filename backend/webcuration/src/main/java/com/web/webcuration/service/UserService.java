package com.web.webcuration.service;

import java.io.IOException;

import com.web.webcuration.dto.request.NickNameRequest;
import com.web.webcuration.dto.request.ProfileRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;

public interface UserService {

    BaseResponse getUserInfo(String email);

    BaseResponse deleteUser(Long userid);

    BaseResponse updateUser(ProfileRequest profileRequest) throws IllegalStateException, IOException;

    BaseResponse updatePasswordUser(UserRequest changeUser);

    BaseResponse setNickname(NickNameRequest nicknameRequest);
}
