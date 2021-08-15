package com.web.webcuration.service;

import java.io.IOException;
import java.util.Optional;

import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.request.ProfileRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.repository.UserRepository;
import com.web.webcuration.utils.FileUtils;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
            return BaseResponse.builder().status("200").status("success").data(user.get()).build();
        } else {
            throw new RuntimeException("존재하지 않은 이메일입니다.");
        }
    }

    @Override
    public BaseResponse deleteUser(Long userid) {
        userRepository.deleteById(userid);
        return BaseResponse.builder().status("200").status("success").build();
    }

    @Override
    @Transactional
    public BaseResponse updateUser(ProfileRequest profileRequest) throws IllegalStateException, IOException {
        Optional<User> user = userRepository.findById(profileRequest.getId());
        if (user.isPresent()) {
            User changeUser = user.get();
            changeUser.setNickname(profileRequest.getNickname());
            changeUser.setIntroduce(profileRequest.getNickname());
            if (changeUser.getImage() != null) {
                FileUtils.deleteProfile(changeUser.getImage());
            }
            if (profileRequest.getImage() != null) {
                changeUser.setImage(FileUtils.uploadProfile(profileRequest.getImage()));
            }
            return BaseResponse.builder().status("200").status("success").data(userRepository.save(changeUser)).build();
        }
        throw new RuntimeException("수정하려는 유저가 없습니다.");
    }

    @Override
    @Transactional
    public BaseResponse updatePasswordUser(UserRequest changeUser) {
        Optional<User> user = userRepository.findByEmail(changeUser.getEmail());
        if (user.isPresent()) {
            user.get().setPassword(passwordEncoder.encode(changeUser.getPassword()));
            return BaseResponse.builder().status("200").status("success").data(userRepository.save(user.get())).build();
        } else {
            throw new RuntimeException("패스워드 설정 실패");
        }
    }

}
