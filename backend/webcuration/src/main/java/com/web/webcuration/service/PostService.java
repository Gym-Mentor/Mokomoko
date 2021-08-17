package com.web.webcuration.service;

import java.io.IOException;
import java.time.LocalDateTime;

import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;

public interface PostService {

    BaseResponse readUserPosts(String email);

    BaseResponse getSelectedPost(Long userid, Long postid);

    BaseResponse createPost(PostRequest newPost) throws IllegalStateException, IOException;

    BaseResponse deletePost(Long postid);

    BaseResponse updatePost(PostRequest changePost) throws IllegalStateException, IOException;

    BaseResponse getExplorePost(LocalDateTime lastTime);
}
