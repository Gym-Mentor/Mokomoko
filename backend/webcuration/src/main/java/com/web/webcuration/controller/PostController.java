package com.web.webcuration.controller;

import java.io.IOException;
import java.time.LocalDateTime;

import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.PostService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/post")
public class PostController {

    private final PostService postService;

    // @PostMapping(value = "/", consumes = { MediaType.APPLICATION_JSON_VALUE,
    // MediaType.MULTIPART_FORM_DATA_VALUE })
    @PostMapping()
    public @ResponseBody ResponseEntity<BaseResponse> createPosts(PostRequest post) throws IOException {
        return ResponseEntity.ok(postService.createPost(post));
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<BaseResponse> readUserPosts(@PathVariable("email") String email) {
        return ResponseEntity.ok(postService.readUserPosts(email));
    }

    @GetMapping("/{postid}")
    public ResponseEntity<BaseResponse> getSelectedPost(@PathVariable("postid") Long postid) {
        return ResponseEntity.ok(postService.getSelectedPost(postid));
    }

    @DeleteMapping("/{postid}")
    public ResponseEntity<BaseResponse> deletePost(@PathVariable("postid") Long postid) {
        return ResponseEntity.ok(postService.deletePost(postid));
    }

    @PutMapping()
    public @ResponseBody ResponseEntity<BaseResponse> updatePost(PostRequest changePost) throws IOException {
        return ResponseEntity.ok(postService.updatePost(changePost));
    }

    @GetMapping("/explore")
    public ResponseEntity<BaseResponse> getExplorePost(LocalDateTime lastTime) {
        return ResponseEntity.ok(postService.getExplorePost(lastTime));
    }
}
