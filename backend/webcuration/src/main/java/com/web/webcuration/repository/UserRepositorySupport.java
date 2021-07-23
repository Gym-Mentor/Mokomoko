package com.web.webcuration.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.model.QUser;

import org.springframework.beans.factory.annotation.Autowired;

public class UserRepositorySupport {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QUser qUser = QUser.user;

    public boolean findUserByEmail(String email) {
        long userCount = jpaQueryFactory.select(qUser).from(qUser).where(qUser.email.eq(email)).fetchCount();
        return userCount == 0 ? true : false;
    }
}
