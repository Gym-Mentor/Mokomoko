package com.web.webcuration.service;

import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;

public interface UserService {

    BaseResponse getUserInfo(String email);

    BaseResponse deleteUser(Long userid);

    BaseResponse updateUser(User changeUser);

    BaseResponse updatePasswordUser(UserRequest changeUser);
}
