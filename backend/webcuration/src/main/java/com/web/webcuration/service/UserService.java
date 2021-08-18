package com.web.webcuration.service;

import java.io.IOException;
import java.util.List;

import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.request.NickNameRequest;
import com.web.webcuration.dto.request.ProfileRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;

public interface UserService {

    User getUserInfo(String email);

    User getUserInfo(Long userid);

    BaseResponse deleteUser(Long userid);

    BaseResponse updateUser(ProfileRequest profileRequest) throws IllegalStateException, IOException;

    BaseResponse updatePasswordUser(UserRequest changeUser);

    BaseResponse setNickname(NickNameRequest nicknameRequest);

    User createUser(User newUser);

    List<String> getSearchNickname(String text);

    void changeUserFollowing(Long userid, Long number);

    void changeUserFollower(Long userid, Long number);

    List<User> getRankUsers();

    BaseResponse getRelationToUser(List<Long> relationList);
}
