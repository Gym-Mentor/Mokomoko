package com.web.webcuration.service;

import java.util.List;

import com.web.webcuration.dto.SearchUserInfo;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.dto.response.SearchWordResponse;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SerarchServiceImpl implements SearchService {

    private final UserService userService;
    private final TagService tagService;
    private final PostService postService;

    @Override
    public BaseResponse getSearchWord(String text) {
        // 유저 검색
        List<SearchUserInfo> users = userService.getSearchNickname(text);
        // 태그 검색
        List<String> tags = tagService.getSearchTag(text);
        return BaseResponse.builder().status("200").msg("success")
                .data(SearchWordResponse.builder().tags(tags).users(users).build()).build();
    }

    @Override
    public BaseResponse getSearchResult(String word) {
        List<Long> postids = tagService.getPostidByTagName(word);

        return null;
    }

}
