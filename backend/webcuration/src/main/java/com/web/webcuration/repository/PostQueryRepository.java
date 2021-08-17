package com.web.webcuration.repository;

import java.util.ArrayList;
import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.Post;
import com.web.webcuration.Entity.QPost;
import com.web.webcuration.dto.request.ExplorePostRequest;
import com.web.webcuration.dto.request.MainFeedRequest;

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

    public List<Post> getExplorePost(ExplorePostRequest explorePostRequest) {
        List<Post> explorePost = new ArrayList<>();
        if (explorePostRequest.getPostid() == 0L) {
            explorePost = jpaQueryFactory.select(qPost).from(qPost)
                    .where(qPost.userid.notIn(explorePostRequest.getBlock())).orderBy(qPost.id.desc()).limit(15)
                    .fetch();
        } else {
            explorePost = jpaQueryFactory.select(qPost).from(qPost)
                    .where(qPost.id.lt(explorePostRequest.getPostid())
                            .and(qPost.userid.notIn(explorePostRequest.getBlock())))
                    .orderBy(qPost.id.desc()).limit(15).fetch();
        }
        return explorePost;
    }

    public List<Post> getMainFeed(MainFeedRequest mainFeedRequest) {
        List<Post> posts = new ArrayList<>();
        if (mainFeedRequest.getPostid() == 0L) {
            posts = jpaQueryFactory.select(qPost).from(qPost).where(qPost.userid.in(mainFeedRequest.getFollow()))
                    .orderBy(qPost.createdate.desc()).limit(5).fetch();
        } else {
            posts = jpaQueryFactory.select(qPost).from(qPost)
                    .where(qPost.userid.in(mainFeedRequest.getFollow()).and(qPost.id.lt(mainFeedRequest.getPostid())))
                    .orderBy(qPost.createdate.desc()).limit(5).fetch();
        }
        return posts;
    }
}
