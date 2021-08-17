package com.web.webcuration.service;

import com.web.webcuration.Entity.Relation;
import com.web.webcuration.dto.UserRelationInfo;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.dto.response.RelationResponse;

public interface RelationService {

    BaseResponse createRelation(Relation relation);

    BaseResponse deleteRelation(Relation relation);

    BaseResponse updateRelation(Relation relation);

    RelationResponse getUserRelation(Long userid);

    UserRelationInfo getCountUserRelation(Long userid);

    void deleteRelationByUserid(Long userid);
}
