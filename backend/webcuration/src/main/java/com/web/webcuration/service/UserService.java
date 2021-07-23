package com.web.webcuration.service;

import java.util.Optional;

import com.web.webcuration.model.LoginRequest;
import com.web.webcuration.model.User;

public interface UserService {

    boolean SignUp(User newUser);

    Optional<User> Login(LoginRequest loginRequest);
}
