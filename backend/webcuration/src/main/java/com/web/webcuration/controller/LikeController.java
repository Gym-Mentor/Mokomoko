package com.web.webcuration.controller;

import com.web.webcuration.dto.request.LikeRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.LikeService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/likes")
public class LikeController {

    private final LikeService likeService;

    @PostMapping()
    public ResponseEntity<BaseResponse> createLike(@RequestBody LikeRequest reqLike) {
        return ResponseEntity.ok(likeService.createLike(reqLike));
    }

    @DeleteMapping()
    public ResponseEntity<BaseResponse> deleteLike(@RequestBody LikeRequest reqLike) {
        return ResponseEntity.ok(likeService.deleteLike(reqLike));
    }

}
