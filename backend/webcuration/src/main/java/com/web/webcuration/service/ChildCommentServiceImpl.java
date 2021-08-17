package com.web.webcuration.service;

import java.util.List;
import java.util.Optional;

import com.web.webcuration.Entity.ChildComment;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.repository.ChildCommentQueryRepository;
import com.web.webcuration.repository.ChildCommentRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ChildCommentServiceImpl implements ChildCommentService {

    private final ChildCommentRepository childCommentRepository;
    private final ChildCommentQueryRepository childCommentQueryRepository;

    @Override
    public List<ChildComment> getPostChildComment(Long postid) {
        return childCommentQueryRepository.getPostChildComment(postid);
    }

    @Override
    public BaseResponse updateChildComment(ChildComment childComment) {
        return BaseResponse.builder().status("200").msg("success").data(childCommentRepository.save(childComment))
                .build();
    }

    @Override
    public BaseResponse deleteChildComment(Long childCommentid) {
        childCommentRepository.deleteById(childCommentid);
        return BaseResponse.builder().status("200").msg("success").build();
    }

    @Override
    public BaseResponse createChildComment(ChildComment childComment) {
        return BaseResponse.builder().status("200").msg("success").data(childCommentRepository.save(childComment))
                .build();
    }

    @Override
    public Long getChildCommentPostid(Long childCommentid) {
        Optional<ChildComment> childComment = childCommentRepository.findById(childCommentid);
        if (childComment.isPresent()) {
            return childComment.get().getPostid();
        } else {
            throw new RuntimeException("해당 대댓글이 없습니다.");
        }
    }

    @Override
    public List<ChildComment> deleteChildCommentByPostid(List<Long> postid) {
        List<ChildComment> deleteChildComment = childCommentQueryRepository.getDeleteChildComment(postid);
        childCommentRepository.deleteAll(deleteChildComment);
        return deleteChildComment;
    }

}
