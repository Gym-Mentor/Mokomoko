package com.web.webcuration.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.webcuration.Entity.QUser;

import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class UserQueryRepository {

    private final JPAQueryFactory jpaQueryFactory;
    private QUser quser = QUser.user;

    public Long findIdByEmail(String email) {
        Long id = jpaQueryFactory.select(quser.id).from(quser).where(quser.email.eq(email)).fetchOne();
        if (id == null) {
            throw new RuntimeException("존재하지 않는 이메일입니다.");
        }
        return id;
    }
}