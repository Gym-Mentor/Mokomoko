package com.web.webcuration.repository;

import java.util.Optional;

import com.web.webcuration.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> FindByEmailAndPassword(String email, String password);

    Optional<User> FindByEmail(String email);
}
