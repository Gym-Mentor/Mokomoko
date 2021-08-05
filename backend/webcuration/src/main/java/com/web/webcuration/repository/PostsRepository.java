package com.web.webcuration.repository;

import java.util.List;

import com.web.webcuration.Entity.Posts;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostsRepository extends JpaRepository<Posts, Long> {

    List<Posts> findByUserid(Long userid);
}
