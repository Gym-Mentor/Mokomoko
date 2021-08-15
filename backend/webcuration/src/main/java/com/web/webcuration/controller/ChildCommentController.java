package com.web.webcuration.controller;

import com.web.webcuration.Entity.ChildComment;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.ChildCommentService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/child")
public class ChildCommentController {

    private final ChildCommentService childCommentService;

    @PostMapping()
    public ResponseEntity<BaseResponse> createChildComment(@RequestBody ChildComment childComment) {
        return ResponseEntity.ok(childCommentService.createChildComment(childComment));
    }

    @PutMapping()
    public ResponseEntity<BaseResponse> updateChildComment(@RequestBody ChildComment childComment) {
        return ResponseEntity.ok(childCommentService.updateChildComment(childComment));
    }

    @PostMapping("/{childCommentid}")
    public ResponseEntity<BaseResponse> deleteChildComment(@PathVariable("childCommentid") Long childCommentid) {
        return ResponseEntity.ok(childCommentService.deleteChildComment(childCommentid));
    }

}
