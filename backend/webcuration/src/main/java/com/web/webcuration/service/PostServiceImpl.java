package com.web.webcuration.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.web.webcuration.Entity.Contents;
import com.web.webcuration.Entity.Post;
import com.web.webcuration.Entity.Tag;
import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.dto.response.PostResponse;
import com.web.webcuration.dto.response.UserPostResponse;
import com.web.webcuration.repository.ContentsQueryRepository;
import com.web.webcuration.repository.ContentsRepository;
import com.web.webcuration.repository.PostQueryRepository;
import com.web.webcuration.repository.PostRepository;
import com.web.webcuration.repository.UserQueryRepository;
import com.web.webcuration.repository.UserRepository;
import com.web.webcuration.utils.FileUtils;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class PostServiceImpl implements PostService {

    private final TagService tagService;
    private final PostRepository postRepository;
    private final PostQueryRepository postQueryRepository;
    private final ContentsRepository contentsRepository;
    private final ContentsQueryRepository contentsQueryRepository;
    private final UserRepository userRepository;
    private final UserQueryRepository userQueryRepository;

    // 유저의 모든 게시글 출력
    @Override
    public BaseResponse readUserPosts(String email) {
        Long userid = userQueryRepository.findIdByEmail(email);
        List<Post> posts = postQueryRepository.FindByUserPostOrderby(userid);
        List<UserPostResponse> userPostResponse = new ArrayList<>();
        for (Post post : posts) {
            // 썸네일 사진을 어떻게 전해 주는가?..
            userPostResponse.add(UserPostResponse.builder().post(post)
                    .image(contentsQueryRepository.FindByPostidOrderby(post.getId()).getImage()).build());
        }
        return new BaseResponse("200", "success", userPostResponse);
    }

    // 특정 게시글 출력
    @Override
    public BaseResponse getSelectedPost(Long postid) {
        Optional<Post> post = postRepository.findById(postid);
        if (post.isPresent()) {
            Optional<User> user = userRepository.findById(post.get().getUserid());
            log.info("{}", user.get());
            List<Contents> contents = contentsQueryRepository.FindAllByPostidOrderBy(postid);
            List<Tag> tags = tagService.findPostInTag(postid);
            // comment도 같이 줘야됨
            return new BaseResponse("200", "success", PostResponse.builder().userName(user.get().getNickname())
                    .userImage(user.get().getImage()).contents(contents).tags(tags).post(post.get()).build());
        } else {
            throw new RuntimeException("해당하는 게시글이 없습니다.");
        }
    }

    @Override
    @Transactional
    public BaseResponse createPosts(PostRequest newPost) throws IllegalStateException, IOException {
        Long postid = postRepository.save(newPost.toPost(userQueryRepository.findIdByEmail(newPost.getEmail())))
                .getId();
        contentsRepository.saveAll(FileUtils.fileUpload(newPost.getContents(), postid));
        tagService.saveTag(newPost.getTags(), postid);
        return new BaseResponse("200", "success", null);
    }

    @Override
    public BaseResponse deletePosts(Long postsid) {
        postRepository.deleteById(postsid);
        return new BaseResponse("200", "success", null);
    }

    @Override
    public BaseResponse updatePosts(Post changePosts) {
        return new BaseResponse("200", "success", postRepository.save(changePosts));
    }

}