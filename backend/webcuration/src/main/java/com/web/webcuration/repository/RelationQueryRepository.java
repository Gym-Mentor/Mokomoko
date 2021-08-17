package com.web.webcuration.repository;

import java.util.ArrayList;
import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.QRelation;
import com.web.webcuration.Entity.Relation;
import com.web.webcuration.dto.UserRelationInfo;
import com.web.webcuration.dto.response.UserCheckRelation;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class RelationQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private final QRelation qRelation = QRelation.relation;

    public Relation findBySendAndReceive(Relation relation) {
        Relation findRelation = jpaQueryFactory.select(qRelation).from(qRelation)
                .where(qRelation.send.eq(relation.getSend()).and(qRelation.receive.eq(relation.getReceive())))
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
    public UserRelationInfo getCountUserRelation(Long userid) {
        Long follwer = jpaQueryFactory.selectFrom(qRelation)
                .where(qRelation.state.eq(true).and(qRelation.receive.eq(userid))).fetchCount() - 1;

        Long follwing = jpaQueryFactory.selectFrom(qRelation)
                .where(qRelation.state.eq(true).and(qRelation.send.eq(userid))).fetchCount();

        return UserRelationInfo.builder().follwer(follwer).follwing(follwing).build();
    }

    public List<Relation> findAllbyUserid(Long userid) {
        List<Relation> relations = new ArrayList<>();
        relations = jpaQueryFactory.select(qRelation).from(qRelation)
                .where(qRelation.send.eq(userid).or(qRelation.receive.eq(userid))).fetch();
        return relations;
    }

    public UserCheckRelation checkFollowUser(Long loginUserid, Long selectUserid) {
        List<Relation> relations = jpaQueryFactory.select(qRelation).from(qRelation)
                .where(qRelation.send.eq(loginUserid).and(qRelation.receive.eq(selectUserid))).fetch();
        return relation;
    }

}
