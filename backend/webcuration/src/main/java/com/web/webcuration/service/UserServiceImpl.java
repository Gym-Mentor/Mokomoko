package com.web.webcuration.service;

import java.util.Optional;

import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.repository.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public BaseResponse getUserInfo(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return new BaseResponse("200", "success", user.get());
        } else {
            throw new RuntimeException("존재하지 않은 이메일입니다.");
        }
    }

    @Override
    public BaseResponse deleteUser(Long userid) {
        userRepository.deleteById(userid);
        return new BaseResponse("200", "success", null);
    }

    @Override
    public BaseResponse updateUser(User changeUser) {
        changeUser.setPassword(passwordEncoder.encode(changeUser.getPassword()));
        return new BaseResponse("200", "success", userRepository.save(changeUser));
    }

}
