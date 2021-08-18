package com.web.webcuration.controller;

import com.web.webcuration.dto.request.SearchRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.SearchService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/search")
@Slf4j
public class SearchController {

    private final SearchService searchService;

    @GetMapping()
    public ResponseEntity<BaseResponse> getSearchWord(SearchRequest searchRequest) {
        log.info("{}", searchRequest);
        return ResponseEntity.ok(searchService.getSearchWord(searchRequest));
    }
}
