package com.web.webcuration.repository;

import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.ChildComment;
import com.web.webcuration.Entity.QChildComment;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ChildCommentQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private final QChildComment qChildComment = QChildComment.childComment;

    public List<ChildComment> getPostChildComment(Long postid) {
        return jpaQueryFactory.select(qChildComment).from(qChildComment).where(qChildComment.postid.eq(postid))
                .orderBy(qChildComment.createdate.desc()).fetch();
    }
}
