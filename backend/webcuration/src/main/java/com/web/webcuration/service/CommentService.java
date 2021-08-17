package com.web.webcuration.service;

import java.util.List;

import com.web.webcuration.Entity.Comment;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.dto.response.CommentResponse;

public interface CommentService {

    List<CommentResponse> getPostComment(Long postid);

    BaseResponse updateComment(Comment comment);

    BaseResponse deleteComment(Long commentid);

    BaseResponse createComment(Comment comment);

    Long getCommentPostid(Long commentid);
}
