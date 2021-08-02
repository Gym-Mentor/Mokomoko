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

    public static UserResponse of(User user) {
        return new UserResponse(user.getEmail());
    }
}
