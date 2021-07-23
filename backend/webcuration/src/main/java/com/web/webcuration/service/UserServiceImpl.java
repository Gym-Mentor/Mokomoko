package com.web.webcuration.service;

import java.util.Optional;

import com.web.webcuration.model.LoginRequest;
import com.web.webcuration.model.User;
import com.web.webcuration.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean SignUp(User newUser) {

        if (!userRepository.findUserByEmail(newUser.getEmail()).isPresent()
                && !userRepository.findUserByNickname(newUser.getNickname()).isPresent()) {
            userRepository.save(newUser);
            return true;
        }
        return false;
    }

    @Override
    public Optional<User> Login(LoginRequest loginRequest) {
        return userRepository.findUserByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
    }

}
