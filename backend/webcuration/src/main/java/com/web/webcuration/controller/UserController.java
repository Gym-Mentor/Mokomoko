package com.web.webcuration.controller;

import java.io.IOException;
import java.util.List;

import com.web.webcuration.dto.request.NickNameRequest;
import com.web.webcuration.dto.request.ProfileRequest;
import com.web.webcuration.dto.request.UserRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.PostService;
import com.web.webcuration.service.RelationService;
import com.web.webcuration.service.ScrapService;
import com.web.webcuration.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
    private final ScrapService scrapService;

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
        List<Long> deletePostid = postService.deleteByUserid(userid);
        scrapService.deleteAllScrapByUserid(userid);
        scrapService.deleteAllScrapByPostid(deletePostid);
        return ResponseEntity.ok(userService.deleteUser(userid));
    }

    @PutMapping("/name")
    public ResponseEntity<BaseResponse> updateUser(@RequestBody NickNameRequest nicknameRequest) {
        return ResponseEntity.ok(userService.setNickname(nicknameRequest));
    }

    @GetMapping("/follower/{userid}")
    public ResponseEntity<BaseResponse> getFollowerList(Long userid) {
        List<Long> followerList = relationService.getFollowerListByUserid(userid);
        return ResponseEntity.ok(userService.getRelationToUser(followerList));
    }

    @GetMapping("/follow/{userid}")
    public ResponseEntity<BaseResponse> getFollowingList(Long userid) {
        List<Long> followList = relationService.getFollowListByUserid(userid);
        return ResponseEntity.ok(userService.getRelationToUser(followList));
    }

}
