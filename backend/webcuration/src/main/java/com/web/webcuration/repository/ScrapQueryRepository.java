package com.web.webcuration.repository;

import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.QScrap;
import com.web.webcuration.Entity.Scrap;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ScrapQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private final QScrap qScrap = QScrap.scrap;

    public List<Scrap> findAllByUseridOrderBy(Long userid) {
        return jpaQueryFactory.selectFrom(qScrap).where(qScrap.userid.eq(userid)).orderBy(qScrap.id.desc()).fetch();
    }

    public List<Scrap> findAllByUserid(Long userid) {
        return jpaQueryFactory.selectFrom(qScrap).where(qScrap.userid.eq(userid)).fetch();
    }

    public List<Scrap> findAllByPostid(List<Long> postids) {
        return jpaQueryFactory.selectFrom(qScrap).where(qScrap.postid.in(postids)).fetch();
    }

}
