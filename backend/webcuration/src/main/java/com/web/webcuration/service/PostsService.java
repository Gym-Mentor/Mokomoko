package com.web.webcuration.service;

import com.web.webcuration.Entity.Posts;
import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;

public interface PostsService {

    BaseResponse readPosts(String email);

    BaseResponse getUserPost(Long postsid);

    BaseResponse createPosts(PostRequest newPosts);

    BaseResponse deletePosts(Long postsid);

    BaseResponse updatePosts(Posts changePosts);
}
