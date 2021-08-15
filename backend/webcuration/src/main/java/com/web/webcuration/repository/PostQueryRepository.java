package com.web.webcuration.repository;

import java.time.LocalDateTime;
import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.Post;
import com.web.webcuration.Entity.QPost;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class PostQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private final QPost qPost = QPost.post;

    public List<Post> FindByUserPostOrderby(Long userid) {
        List<Post> userPost = jpaQueryFactory.select(qPost).from(qPost).where(qPost.userid.eq(userid))
                .orderBy(qPost.createdate.desc()).fetch();
        return userPost;
    }

    public List<Post> getExplorePost(LocalDateTime lastTime) {
        List<Post> explorePost;
        if (lastTime == null) {
            explorePost = jpaQueryFactory.select(qPost).from(qPost).orderBy(qPost.createdate.desc()).limit(15).fetch();
        } else {
            explorePost = jpaQueryFactory.select(qPost).from(qPost).where(qPost.createdate.lt(lastTime))
                    .orderBy(qPost.createdate.desc()).limit(15).fetch();
        }
        return explorePost;
    }

}
