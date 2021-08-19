package com.web.webcuration.controller;

import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.service.SearchService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/search")
public class SearchController {

    private final SearchService searchService;

    @GetMapping()
    public ResponseEntity<BaseResponse> getSearchWord(@RequestParam("userid") Long userid,
            @RequestParam("text") String text) {
        return ResponseEntity.ok(searchService.getSearchWord(userid, text));
    }

    @GetMapping("/{word}")
    public ResponseEntity<BaseResponse> getSearchResult(@PathVariable String word) {
        return ResponseEntity.ok(null);
    }

}
