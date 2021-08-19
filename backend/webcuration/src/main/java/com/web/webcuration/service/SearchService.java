package com.web.webcuration.service;

import com.web.webcuration.dto.response.BaseResponse;

public interface SearchService {

    BaseResponse getSearchWord(String text);

    BaseResponse getSearchResult(String word);
}
