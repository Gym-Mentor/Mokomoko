package com.web.webcuration.service;

import java.util.Optional;

import com.web.webcuration.model.User;

import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {

    boolean SignUp(User newUser);

    Optional<User> login(User user);

    Optional<User> findByEmail(String email);

    UserDetails loadUser(String email);
}
