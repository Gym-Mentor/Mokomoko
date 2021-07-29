package com.web.webcuration.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.model.QUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositorySupport {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QUser qUser = QUser.user;

    public boolean findUserByEmailAndNickname(String email, String nickname) {
        long userCount = jpaQueryFactory.select(qUser).from(qUser)
                        .where(qUser.email.eq(email).or(qUser.nickname.eq(nickname)))
                        .fetchCount();
        return userCount == 0 ? true : false;
    }
}
