package com.web.webcuration.service;

import com.web.webcuration.dto.request.LikeRequest;
import com.web.webcuration.dto.response.BaseResponse;

public interface LikeService {

    boolean readLike(LikeRequest reqLike);

    BaseResponse createLike(LikeRequest reqLike);

    BaseResponse deleteLike(LikeRequest reqLike);
}
