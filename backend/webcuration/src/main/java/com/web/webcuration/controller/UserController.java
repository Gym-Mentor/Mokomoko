package com.web.webcuration.controller;

import java.io.IOException;

import com.web.webcuration.dto.request.NickNameRequest;
import com.web.webcuration.dto.request.ProfileRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@Slf4j
public class UserController {

    private final UserService userService;

    @PutMapping("/passwords")
    public ResponseEntity<BaseResponse> updatePasswordUsEntity(@RequestBody UserRequest updateUser) {
        return ResponseEntity.ok(userService.updatePasswordUser(updateUser));

    }

    @PutMapping()
    public @ResponseBody ResponseEntity<BaseResponse> updateUser(ProfileRequest profileRequest)
            throws IllegalStateException, IOException {
        log.info("{}", "프로필 : " + profileRequest);
        return ResponseEntity.ok(userService.updateUser(profileRequest));
    }

    @DeleteMapping("/{userid}")
    public ResponseEntity<BaseResponse> deleteUser(@PathVariable("userid") Long userid) {
        return ResponseEntity.ok(userService.deleteUser(userid));
    }

    @PutMapping("/name")
    public ResponseEntity<BaseResponse> updateUser(@RequestBody NickNameRequest nicknameRequest) {
        return ResponseEntity.ok(userService.setNickname(nicknameRequest));
    }

}
