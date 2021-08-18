package com.web.webcuration.controller;

import java.io.IOException;

import com.web.webcuration.dto.request.NickNameRequest;
import com.web.webcuration.dto.request.ProfileRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.PostService;
import com.web.webcuration.service.RelationService;
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

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;
    private final PostService postService;
    private final RelationService relationService;

    @PutMapping("/passwords")
    public ResponseEntity<BaseResponse> updatePasswordUsEntity(@RequestBody UserRequest updateUser) {
        return ResponseEntity.ok(userService.updatePasswordUser(updateUser));

    }

    @PutMapping()
    public @ResponseBody ResponseEntity<BaseResponse> updateUser(ProfileRequest profileRequest)
            throws IllegalStateException, IOException {
        return ResponseEntity.ok(userService.updateUser(profileRequest));
    }

    @DeleteMapping("/{userid}")
    public ResponseEntity<BaseResponse> deleteUser(@PathVariable("userid") Long userid) {
        relationService.deleteRelationByUserid(userid);
        postService.deleteByUserid(userid);
        return ResponseEntity.ok(userService.deleteUser(userid));
    }

    @PutMapping("/name")
    public ResponseEntity<BaseResponse> updateUser(@RequestBody NickNameRequest nicknameRequest) {
        return ResponseEntity.ok(userService.setNickname(nicknameRequest));
    }

}
