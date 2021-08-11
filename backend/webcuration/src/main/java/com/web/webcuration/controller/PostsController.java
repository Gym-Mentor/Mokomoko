package com.web.webcuration.controller;

import java.util.HashMap;

import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.PostsService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class PostsController {

    private final PostsService postsService;

    @PostMapping("/")
    public ResponseEntity<BaseResponse> createPosts(@RequestBody HashMap<String, String> newPosts) {
        // postsService.createPosts(newPosts);

        return ResponseEntity.ok(new BaseResponse("200", "success", newPosts));
    }
}
