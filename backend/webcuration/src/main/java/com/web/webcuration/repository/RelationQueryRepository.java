package com.web.webcuration.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.QRelation;
import com.web.webcuration.Entity.Relation;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class RelationQueryRepository {

    JPAQueryFactory jpaQueryFactory;
    QRelation qRelation = QRelation.relation;

    public Relation FindBySendAndReceive(Relation relation) {
        Relation findRelation = jpaQueryFactory.select(qRelation).from(qRelation)
                .where(qRelation.send.eq(relation.getSend()).and(qRelation.receive.eq(relation.getReceive())))
                .fetchOne();
        return findRelation;
    }

}
