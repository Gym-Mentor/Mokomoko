package com.web.webcuration.controller;

import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @PutMapping("/passwords")
    public ResponseEntity<BaseResponse> updatePasswordUsEntity(@RequestBody UserRequest updateUser) {
        BaseResponse res = userService.updatePasswordUser(updateUser);
        return ResponseEntity.ok(res);

    }
}
