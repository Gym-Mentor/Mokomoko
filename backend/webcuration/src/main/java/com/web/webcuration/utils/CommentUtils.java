package com.web.webcuration.utils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.web.webcuration.Entity.ChildComment;
import com.web.webcuration.Entity.Comment;
import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.response.ChildCommentResponse;
import com.web.webcuration.dto.response.CommentResponse;
import com.web.webcuration.repository.UserRepository;

import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class CommentUtils {

    private final UserRepository userRepository;

    public Map<Long, List<ChildCommentResponse>> childCommentToResponse(List<ChildComment> childComments) {
        Map<Long, List<ChildCommentResponse>> childResponseMap = new HashMap<>();
        Map<Long, Optional<User>> userMap = new HashMap<>();
        for (ChildComment childComment : childComments) {
            Optional<User> user;
            if (userMap.get(childComment.getUserid()) == null) {
                user = userRepository.findById(childComment.getUserid());
                userMap.put(childComment.getUserid(), userRepository.findById(childComment.getUserid()));
            } else {
                user = userMap.get(childComment.getUserid());
            }
            if (user.isPresent()) {
                if (childResponseMap.get(childComment.getCommentid()) == null) {
                    childResponseMap.put(childComment.getCommentid(),
                            new ArrayList<>(Arrays.asList(ChildCommentResponse.of(user.get(), childComment))));
                } else {
                    childResponseMap.get(childComment.getCommentid())
                            .add(ChildCommentResponse.of(user.get(), childComment));
                }
            } else {
                new RuntimeException("해당 유저가 없습니다.");
            }
        }
        return childResponseMap;
    }

    public List<CommentResponse> CommentToResponse(List<Comment> comments, List<ChildComment> childComments) {
        List<CommentResponse> commentResponses = new ArrayList<>();
        Map<Long, List<ChildCommentResponse>> childResponseMap = childCommentToResponse(childComments);
        Map<Long, Optional<User>> userMap = new HashMap<>();
        for (Comment comment : comments) {
            Optional<User> user;
            if (userMap.get(comment.getUserid()) == null) {
                user = userRepository.findById(comment.getUserid());
                userMap.put(comment.getUserid(), userRepository.findById(comment.getUserid()));
            } else {
                user = userMap.get(comment.getUserid());
            }
            if (user.isPresent()) {
                commentResponses.add(CommentResponse.of(user.get(), comment, childResponseMap.get(comment.getId())));
            } else {
                new RuntimeException("해당 유저가 없습니다.");
            }
        }
        return commentResponses;
    }
}
