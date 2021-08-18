package com.web.webcuration.controller;

import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.RankService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/rank")
@RequiredArgsConstructor
public class RankController {

    private final RankService rankService;

    @GetMapping()
    public ResponseEntity<BaseResponse> getRankList() {
        return ResponseEntity.ok(rankService.getRankList());
    }
}
