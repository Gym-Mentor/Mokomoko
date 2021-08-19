package com.web.webcuration.service;

import com.web.webcuration.dto.response.BaseResponse;

public interface SearchService {

    BaseResponse getSearchWord(Long userid, String text);

    BaseResponse getSearchResult(Long userid, String word);
}
