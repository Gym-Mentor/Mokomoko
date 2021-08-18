package com.web.webcuration.repository;

import java.util.ArrayList;
import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.QTag;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class TagQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private final QTag qTag = QTag.tag;

    public List<String> getAllTagName() {
        List<String> AllTagName = new ArrayList<>();
        AllTagName = jpaQueryFactory.select(qTag.name).from(qTag).where(qTag.name.isNotNull()).orderBy(qTag.name.asc())
                .fetch();
        return AllTagName;
    }
}
