package com.web.webcuration.service;

import java.util.Optional;

import javax.transaction.Transactional;

import com.web.webcuration.Entity.Posts;
import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.repository.PostsRepository;
import com.web.webcuration.repository.UserQueryRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostsServiceImpl implements PostsService {

    private final PostsRepository postsRepository;
    private final UserQueryRepository userQueryRepository;

    @Override
    @Transactional
    public BaseResponse readPosts(String email) {
        Long userid = userQueryRepository.findIdByEmail(email);
        return new BaseResponse("200", "success", postsRepository.findByUserid(userid));
    }

    @Override
    public BaseResponse getUserPost(Long postsid) {
        Optional<Posts> post = postsRepository.findById(postsid);
        if (post.isPresent()) {
            return new BaseResponse("200", "success", post.get());
        } else {
            throw new RuntimeException("해당하는 게시글이 없습니다.");
        }
    }

    @Override
    public BaseResponse createPosts(PostRequest newPost) {

        return new BaseResponse("200", "success", newPost);
    }

    @Override
    public BaseResponse deletePosts(Long postsid) {
        postsRepository.deleteById(postsid);
        return new BaseResponse("200", "success", null);
    }

    @Override
    public BaseResponse updatePosts(Posts changePosts) {
        return new BaseResponse("200", "success", postsRepository.save(changePosts));
    }

}