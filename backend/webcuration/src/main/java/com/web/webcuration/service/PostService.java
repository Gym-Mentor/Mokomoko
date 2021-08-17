package com.web.webcuration.service;

import java.io.IOException;
import java.util.List;

import com.web.webcuration.dto.request.FeedRequest;
import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.dto.response.MainFeedResponse;

public interface PostService {

    BaseResponse readUserPosts(String email);

    BaseResponse getSelectedPost(Long userid, Long postid);

    BaseResponse createPost(PostRequest newPost) throws IllegalStateException, IOException;

    BaseResponse deletePost(Long postid);

    BaseResponse updatePost(PostRequest changePost) throws IllegalStateException, IOException;

    BaseResponse getExplorePost(FeedRequest feedRequest);

    List<MainFeedResponse> getMainFeed(FeedRequest feedRequest);

    void changePostCommentCnt(Long postid, Long number);

    void changePostLikeCnt(Long postid, Long number);

    void deleteByUserid(Long userid);
}
