package com.web.webcuration.repository;

import java.util.ArrayList;
import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.QRelation;
import com.web.webcuration.Entity.Relation;
import com.web.webcuration.dto.UserRelationInfo;
import com.web.webcuration.dto.request.RelationRequest;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class RelationQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private final QRelation qRelation = QRelation.relation;

    public Relation findBySendAndReceive(RelationRequest relationRequest) {
        Relation findRelation = jpaQueryFactory.select(qRelation).from(qRelation).where(
                qRelation.send.eq(relationRequest.getSend()).and(qRelation.receive.eq(relationRequest.getReceive())))
                .fetchOne();
        return findRelation;
    }

    // 로그인했을 때 팔로워, 차단 userid 전해주기
    public List<Relation> getUserRelation(Long userid) {
        List<Relation> relations = new ArrayList<>();
        relations = jpaQueryFactory.select(qRelation).from(qRelation).where(qRelation.send.eq(userid)).fetch();
        return relations;
    }

    // 팔로우, 팔로워 수 가져오기
    public UserRelationInfo getCountUserRelation(Long send, Long userid) {
        Long follwing = jpaQueryFactory.selectFrom(qRelation)
                .where(qRelation.state.eq(true).and(qRelation.send.eq(userid))).fetchCount() - 1;

        List<Relation> follwerRelations = jpaQueryFactory.selectFrom(qRelation)
                .where(qRelation.state.eq(true).and(qRelation.receive.eq(userid))).fetch();
        Long follwer = 0L;
        boolean isFollow = false;
        if (follwerRelations != null) {
            follwer = Long.valueOf(follwerRelations.size() - 1);
            for (Relation relation : follwerRelations) {
                if (relation.getSend() == send) {
                    isFollow = true;
                    break;
                }
            }
        }
        return UserRelationInfo.builder().follower(follwer).following(follwing).isFollow(isFollow).build();
    }

    public List<Relation> findAllbyUserid(Long userid) {
        List<Relation> relations = new ArrayList<>();
        relations = jpaQueryFactory.select(qRelation).from(qRelation)
                .where(qRelation.send.eq(userid).or(qRelation.receive.eq(userid))).fetch();
        return relations;
    }

    public List<Long> getFollowListByUserid(Long userid) {
        List<Long> followList = jpaQueryFactory.select(qRelation.receive).from(qRelation)
                .where(qRelation.send.eq(userid).and(qRelation.receive.ne(userid))).fetch();
        return followList;
    }

    public List<Long> getFollowerListByUserid(Long userid) {
        List<Long> followerList = jpaQueryFactory.select(qRelation.send).from(qRelation)
                .where(qRelation.receive.eq(userid).and(qRelation.send.ne(userid))).fetch();
        return followerList;
    }
}
