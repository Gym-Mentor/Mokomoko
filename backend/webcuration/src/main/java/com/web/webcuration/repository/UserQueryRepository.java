package com.web.webcuration.repository;

import java.util.ArrayList;
import java.util.List;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.QUser;
import com.web.webcuration.Entity.User;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class UserQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private QUser qUser = QUser.user;

    public boolean DuplicateCheckName(Long userid, String nickname) {
        String previousNickname = jpaQueryFactory.select(qUser.nickname).from(qUser).where(qUser.id.eq(userid))
                .fetchFirst();
        if (previousNickname == null || previousNickname.equals(nickname)) {
            return true;
        }
        Long countChangeNickname = jpaQueryFactory.select(qUser.nickname).from(qUser).where(qUser.nickname.eq(nickname))
                .fetchCount();
        if (countChangeNickname == 0) {
            return true;
        } else {
            return false;
        }
    }

    public List<User> getUserOrderBy() {
        List<User> UserOrderBy = new ArrayList<>();
        UserOrderBy = jpaQueryFactory.selectFrom(qUser).where(qUser.nickname.isNotNull()).orderBy(qUser.nickname.asc())
                .fetch();
        return UserOrderBy;
    }

    public List<User> getRankUsers() {
        return jpaQueryFactory.selectFrom(qUser).orderBy(qUser.follower.desc(), qUser.createdate.asc()).limit(9)
                .fetch();
    }

    public List<User> getListToUser(List<Long> relationList) {
        return jpaQueryFactory.selectFrom(qUser).where(qUser.id.in(relationList)).fetch();
    }

    public List<User> getOtherUser(Long userid) {
        List<User> otherUser = jpaQueryFactory.selectFrom(qUser).where(qUser.id.ne(userid)).fetch();
        return otherUser == null ? new ArrayList<>() : otherUser;
    }
}