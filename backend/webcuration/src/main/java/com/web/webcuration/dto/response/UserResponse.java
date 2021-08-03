package com.web.webcuration.dto.response;

import com.web.webcuration.Entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {

    private String email;
    private BaseResponse res;

    public static UserResponse of(User user) {
        return new UserResponse(user.getEmail(), new BaseResponse("200", "성공"));
    }
}
