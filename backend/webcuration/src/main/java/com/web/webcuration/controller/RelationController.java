package com.web.webcuration.controller;

import com.web.webcuration.Entity.Relation;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.RelationService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/relation")
public class RelationController {

    private final RelationService relationService;

    @PostMapping()
    public ResponseEntity<BaseResponse> createRelation(@RequestBody Relation relation) {
        return ResponseEntity.ok(null);
    }

    // 팔로우 -> 차단
    @PutMapping()
    public ResponseEntity<BaseResponse> updateRelation(@RequestBody Relation relation) {
        return ResponseEntity.ok(null);
    }

    @DeleteMapping()
    public ResponseEntity<BaseResponse> deleteRelation(@RequestBody Relation relation) {
        return ResponseEntity.ok(null);
    }
}
