package com.web.webcuration.controller;

import com.web.webcuration.dto.request.LikeRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.LikeService;
import com.web.webcuration.service.PostService;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/likes")
public class LikeController {

    private final PostService postService;
    private final LikeService likeService;

    @PostMapping()
    @Transactional
    public ResponseEntity<BaseResponse> createLike(@RequestBody LikeRequest reqLike) {
        likeService.createLike(reqLike);
        return ResponseEntity.ok(postService.changePostLikeCnt(reqLike.getPostid(), 1L));
    }

    @DeleteMapping()
    @Transactional
    public ResponseEntity<BaseResponse> deleteLike(@RequestBody LikeRequest reqLike) {
        likeService.deleteLike(reqLike);
        return ResponseEntity.ok(postService.changePostLikeCnt(reqLike.getPostid(), -1L));
    }

}
