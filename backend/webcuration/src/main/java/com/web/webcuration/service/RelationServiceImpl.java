package com.web.webcuration.service;

import com.web.webcuration.Entity.Relation;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.dto.response.RelationResponse;
import com.web.webcuration.repository.RelationQueryRepository;
import com.web.webcuration.repository.RelationRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RelationServiceImpl implements RelationService {

    private final RelationRepository relationRepository;
    private final RelationQueryRepository relationQueryRepository;

    @Override
    public BaseResponse createRelation(Relation relation) {
        return BaseResponse.builder().status("200").msg("success").data(relationRepository.save(relation)).build();
    }

    @Override
    public BaseResponse deleteRelation(Relation relation) {
        relationRepository.delete(relationQueryRepository.FindBySendAndReceive(relation));
        return BaseResponse.builder().status("200").msg("success").build();
    }

    @Override
    @Transactional
    public BaseResponse updateRelation(Relation relation) {
        return BaseResponse.builder().status("200").msg("success").data(relationRepository.save(relation)).build();
    }

    @Override
    public RelationResponse getRelation(Long userid) {

        return null;
    }

}
