package com.web.webcuration.service;

import java.io.IOException;

import com.web.webcuration.Entity.Post;
import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;

public interface PostService {

    BaseResponse readUserPosts(String email);

    BaseResponse getSelectedPost(Long postid);

    BaseResponse createPosts(PostRequest newPosts) throws IllegalStateException, IOException;

    BaseResponse deletePosts(Long postsid);

    BaseResponse updatePosts(Post changePosts);
}
