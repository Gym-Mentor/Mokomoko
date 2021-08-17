package com.web.webcuration.service;

import java.util.List;

import com.web.webcuration.Entity.ChildComment;
import com.web.webcuration.dto.response.BaseResponse;

public interface ChildCommentService {

    List<ChildComment> getPostChildComment(Long commentid);

    BaseResponse updateChildComment(ChildComment childComment);

    BaseResponse deleteChildComment(Long childCommentid);

    BaseResponse createChildComment(ChildComment childComment);

    Long getChildCommentPostid(Long childCommentid);
}
