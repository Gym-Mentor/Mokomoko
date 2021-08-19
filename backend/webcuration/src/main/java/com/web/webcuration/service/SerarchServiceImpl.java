package com.web.webcuration.service;

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
        if (searchRequest.isType()) {
            // 유저 검색
            return BaseResponse.builder().status("200").msg("success")
                    .data(userService.getSearchNickname(searchRequest.getText())).build();
        } else {
            // 태그 검색
            return BaseResponse.builder().status("200").msg("success")
                    .data(tagService.getSearchTag(searchRequest.getText())).build();
        }
    }

}
