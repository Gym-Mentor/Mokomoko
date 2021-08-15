package com.web.webcuration.repository;

import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.Comment;
import com.web.webcuration.Entity.QComment;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class CommentQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private final QComment qComment = QComment.comment;

    public List<Comment> getPostComment(Long postid) {
        return jpaQueryFactory.select(qComment).from(qComment).where(qComment.postid.eq(postid))
                .orderBy(qComment.createdate.desc()).fetch();
    }

}
