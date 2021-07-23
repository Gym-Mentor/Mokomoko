package com.web.webcuration.repository;

import java.util.Optional;

import com.web.webcuration.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    // Email과 Nickname의 중복검사
    Optional<User> findUserByEmailAndNickname(String email, String nickname);

}
