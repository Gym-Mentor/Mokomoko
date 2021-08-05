package com.web.webcuration.controller;

import com.web.webcuration.Entity.User;
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

    @PutMapping("")
    public ResponseEntity<BaseResponse> updateUser(@RequestBody User updateUser) {
        BaseResponse res = userService.updateUser(updateUser);
        return ResponseEntity.ok(res);

    }
}
