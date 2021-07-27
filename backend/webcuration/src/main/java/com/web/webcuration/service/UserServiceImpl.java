package com.web.webcuration.service;

import com.web.webcuration.Entity.User;
import com.web.webcuration.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService{
    
    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public User getUserInfo(String email) {
        return userRepository.findByEmail(email).get();
    }

}
