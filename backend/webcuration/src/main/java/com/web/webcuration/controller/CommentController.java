package com.web.webcuration.controller;

import com.web.webcuration.Entity.Comment;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.CommentService;
import com.web.webcuration.service.PostService;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comment")
public class CommentController {

    private final PostService postService;
    private final CommentService commentService;

    @PutMapping()
    public ResponseEntity<BaseResponse> updateComment(@RequestBody Comment comment) {
        return ResponseEntity.ok(commentService.updateComment(comment));
    }

    @DeleteMapping("/{commentid}")
    @Transactional
    public ResponseEntity<BaseResponse> deleteComment(@PathVariable("commentid") Long commentid) {
        Long postid = commentService.getCommentPostid(commentid);
        postService.ChangePostCommentCnt(postid, -1L);
        return ResponseEntity.ok(commentService.deleteComment(commentid));
    }

    @PostMapping()
    @Transactional
    public ResponseEntity<BaseResponse> createComment(@RequestBody Comment comment) {
        postService.ChangePostCommentCnt(comment.getPostid(), 1L);
        return ResponseEntity.ok(commentService.createComment(comment));
    }
}
