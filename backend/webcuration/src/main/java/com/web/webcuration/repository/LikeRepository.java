package com.web.webcuration.repository;

import java.util.Optional;

import com.web.webcuration.Entity.Likes;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Likes, Long> {

    Optional<Likes> findByUseridAndPostid(Long userid, Long postid);

    Long deleteByUseridAndPostid(Long userid, Long postid);
}
