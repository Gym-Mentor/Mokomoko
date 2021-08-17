package com.web.webcuration.service;

import java.io.IOException;
import java.util.Optional;

import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.request.NickNameRequest;
import com.web.webcuration.dto.request.ProfileRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.repository.UserQueryRepository;
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
    private final UserQueryRepository userQueryRepository;

    @Override
    public User getUserInfo(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }

    @Override
    public User getUserInfo(Long userid) {
        Optional<User> user = userRepository.findById(userid);
        if (user.isPresent()) {
            return user.get();
        } else {
            return null;
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
        if (userQueryRepository.DuplicateCheckName(profileRequest.getId(), profileRequest.getNickname())) {
            Optional<User> user = userRepository.findById(profileRequest.getId());
            if (user.isPresent()) {
                // 바뀌기전 이본 유저 정보
                User changeUser = user.get();
                changeUser.setNickname(profileRequest.getNickname());
                changeUser.setIntroduce(profileRequest.getIntroduce());

                if (profileRequest.isFileChanged()) {
                    // 사진이 변경 됐으면
                    if (!changeUser.getImage().equals("/profileImg/user_image.png")) {
                        // 기본 프로필이 아니면
                        FileUtils.deleteProfile(changeUser.getImage());
                    }
                    if (profileRequest.getImage() == null) {
                        // 기본 프로필 설정을 했으면
                        changeUser.setImage("/profileImg/user_image.png");
                    } else {
                        // 다른 사진으로 설정했으면
                        changeUser.setImage(FileUtils.uploadProfile(profileRequest.getImage()));
                    }
                }
                return BaseResponse.builder().status("200").status("success").data(userRepository.save(changeUser))
                        .build();
            }
            throw new RuntimeException("수정하려는 유저가 없습니다.");
        } else {
            return BaseResponse.builder().status("500").msg("닉네임 중복").build();
        }
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

    @Override
    public BaseResponse setNickname(NickNameRequest nicknameRequest) {
        if (userQueryRepository.DuplicateCheckName(nicknameRequest.getId(), nicknameRequest.getNickname())) {
            Optional<User> user = userRepository.findById(nicknameRequest.getId());
            user.get().setNickname(nicknameRequest.getNickname());
            return BaseResponse.builder().status("200").msg("success").data(userRepository.save(user.get())).build();
        } else {
            return BaseResponse.builder().status("500").msg("닉네임 중복").build();
        }
    }

    @Override
    public User createUser(User newUser) {
        return userRepository.save(newUser);
    }

}
