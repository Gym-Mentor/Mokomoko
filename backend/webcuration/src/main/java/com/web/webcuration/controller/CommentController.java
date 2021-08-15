package com.web.webcuration.controller;

import com.web.webcuration.Entity.Comment;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.CommentService;

import org.springframework.http.ResponseEntity;
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

    private final CommentService commentService;

    @PutMapping()
    public ResponseEntity<BaseResponse> updateComment(@RequestBody Comment comment) {
        return ResponseEntity.ok(commentService.updateComment(comment));
    }

    @DeleteMapping("/{commentid}")
    public ResponseEntity<BaseResponse> deleteComment(@PathVariable("commentid") Long commentId) {
        return ResponseEntity.ok(commentService.deleteComment(commentId));
    }

    @PostMapping()
    public ResponseEntity<BaseResponse> createComment(@RequestBody Comment comment) {
        return ResponseEntity.ok(commentService.createComment(comment));
    }
}
