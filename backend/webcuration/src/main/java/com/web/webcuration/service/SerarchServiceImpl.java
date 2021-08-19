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
    private final RelationService relationService;

    @Override
    public BaseResponse getSearchWord(Long userid, String text) {
        // 유저 검색
        List<Long> blockUserid = relationService.getUserRelation(userid).getBlock();
        List<SearchUserInfo> users = userService.getSearchNickname(blockUserid, text);
        // 태그 검색
        List<String> tags = tagService.getSearchTag(text);
        return BaseResponse.builder().status("200").msg("success")
                .data(SearchWordResponse.builder().tags(tags).users(users).build()).build();
    }

    @Override
    public BaseResponse getSearchResult(Long userid, String word) {
        List<Long> blockUserid = relationService.getUserRelation(userid).getBlock();
        List<Long> postids = tagService.getPostidByTagName(word);
        return BaseResponse.builder().status("200").msg("success")
                .data(postService.getAllPostByPostid(blockUserid, postids)).build();
    }

}
