package com.web.webcuration.controller;

import com.web.webcuration.dto.request.ScrapRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.PostService;
import com.web.webcuration.service.ScrapService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/scrap")
@Slf4j
public class ScrapController {

    private final ScrapService scrapService;
    private final PostService postService;

    @PostMapping()
    public ResponseEntity<BaseResponse> addScrap(@RequestBody ScrapRequest scrapRequest) {
        log.info("{}", "스크랩 : " + scrapRequest);
        return ResponseEntity.ok(scrapService.addScrap(scrapRequest));
    }

    @DeleteMapping("/{scrapid}")
    public ResponseEntity<BaseResponse> deleteScrap(@RequestBody ScrapRequest scrapRequest) {
        return ResponseEntity.ok(scrapService.deleteScrap(scrapRequest));
    }

    @GetMapping("/{userid}")
    public ResponseEntity<BaseResponse> getScrapByUserid(Long userid) {
        return ResponseEntity.ok(postService.getScrapPost(scrapService.getScrapByUserid(userid)));
    }
}
