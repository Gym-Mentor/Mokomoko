package com.web.webcuration.dto.request;

import com.web.webcuration.Entity.Authority;
import com.web.webcuration.Entity.User;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class OAuthUserRequest {

    private String email;

    private String password;

    private String image;

    private String nickname;

    public User toOAuthUser(PasswordEncoder passwordEncoder) {
        return User.builder().email(this.email).password(passwordEncoder.encode(this.password)).nickname(this.nickname)
                .image(this.image).authority(Authority.ROLE_USER).build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(this.email, this.password);
    }
}
