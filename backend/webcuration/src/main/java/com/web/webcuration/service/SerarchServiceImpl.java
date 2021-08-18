package com.web.webcuration.service;

import java.util.ArrayList;
import java.util.List;

import com.web.webcuration.dto.request.SearchRequest;
import com.web.webcuration.dto.response.BaseResponse;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SerarchServiceImpl implements SearchService {

    private final UserService userService;
    private final TagService tagService;

    @Override
    public BaseResponse getSearchWord(SearchRequest searchRequest) {
        List<String> searchWord = new ArrayList<>();
        if (searchRequest.isType()) {
            // 유저 검색
            searchWord = userService.getSearchNickname(searchRequest.getText());
        } else {
            // 태그 검색
            searchWord = tagService.getSearchTag(searchRequest.getText());
        }
        return BaseResponse.builder().status("200").msg("success").data(searchWord).build();
    }

}
