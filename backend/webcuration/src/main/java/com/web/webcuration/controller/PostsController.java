package com.web.webcuration.controller;

import java.util.HashMap;

import javax.mail.Multipart;

import com.web.webcuration.dto.ContentDto;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.PostsService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class PostsController {

    private final PostsService postsService;

    @PostMapping("/")
    public ResponseEntity<BaseResponse> createPosts(MultipartFile multipartFiles, String key) {
        // postsService.createPosts(newPosts);
        ContentDto content = new ContentDto();
        content.setDesc(key);
        content.setImages(multipartFiles);

        return ResponseEntity.ok(new BaseResponse("200", "success", content));
    }
}
