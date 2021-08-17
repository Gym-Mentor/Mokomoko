package com.web.webcuration.controller;

import java.io.IOException;

import com.web.webcuration.dto.request.ExplorePostRequest;
import com.web.webcuration.dto.request.MainFeedRequest;
import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.PostService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/post")
public class PostController {

    private final PostService postService;

    @PostMapping()
    public @ResponseBody ResponseEntity<BaseResponse> createPosts(PostRequest post) throws IOException {
        return ResponseEntity.ok(postService.createPost(post));
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<BaseResponse> readUserPosts(@PathVariable("email") String email) {
        return ResponseEntity.ok(postService.readUserPosts(email));
    }

    @GetMapping("/{userid}/{postid}")
    public ResponseEntity<BaseResponse> getSelectedPost(@PathVariable("userid") Long userid,
            @PathVariable("postid") Long postid) {
        return ResponseEntity.ok(postService.getSelectedPost(userid, postid));
    }

    @DeleteMapping("/{postid}")
    public ResponseEntity<BaseResponse> deletePost(@PathVariable("postid") Long postid) {
        return ResponseEntity.ok(postService.deletePost(postid));
    }

    @PutMapping()
    public @ResponseBody ResponseEntity<BaseResponse> updatePost(PostRequest changePost) throws IOException {
        return ResponseEntity.ok(postService.updatePost(changePost));
    }

    @PostMapping("/explore")
    public ResponseEntity<BaseResponse> getExplorePost(@RequestBody ExplorePostRequest explorePostRequest) {
        return ResponseEntity.ok(postService.getExplorePost(explorePostRequest));
    }

    @PostMapping("/main")
    public ResponseEntity<BaseResponse> getMainFeed(@RequestBody MainFeedRequest mainFeedRequest) {
        return ResponseEntity.ok(BaseResponse.builder().status("200").msg("success")
                .data(postService.getMainFeed(mainFeedRequest)).build());
    }
}
