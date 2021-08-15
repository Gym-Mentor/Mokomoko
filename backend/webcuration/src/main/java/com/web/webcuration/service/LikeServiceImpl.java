package com.web.webcuration.service;

import java.util.Optional;

import com.web.webcuration.Entity.Likes;
import com.web.webcuration.dto.request.LikeRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.repository.LikeRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LikeServiceImpl implements LikeService {

    private final LikeRepository likeRepository;

    @Override
    public boolean readLike(LikeRequest reqLike) {
        Optional<Likes> likes = likeRepository.findByUseridAndPostid(reqLike.getUserid(), reqLike.getPostid());
        if (likes.isPresent()) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public BaseResponse createLike(LikeRequest reqLike) {
        return BaseResponse.builder().status("200").msg("success").data(likeRepository.save(reqLike.toLikes())).build();
    }

    @Override
    public BaseResponse deleteLike(LikeRequest reqLike) {
        return BaseResponse.builder().status("200").msg("success")
                .data(likeRepository.deleteByUseridAndPostid(reqLike.getUserid(), reqLike.getPostid())).build();
    }
}
