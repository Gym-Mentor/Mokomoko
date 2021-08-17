package com.web.webcuration.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.QUser;

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
}