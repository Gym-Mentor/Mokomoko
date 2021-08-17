package com.web.webcuration.service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.web.webcuration.Entity.Contents;
import com.web.webcuration.Entity.Post;
import com.web.webcuration.Entity.Tag;
import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.request.LikeRequest;
import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.dto.response.CommentResponse;
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
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final TagService tagService;
    private final LikeService likeService;
    private final CommentService commentService;
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
        return BaseResponse.builder().status("200").msg("success").data(userPostResponse).build();
    }

    // 특정 게시글 출력
    @Override
    public BaseResponse getSelectedPost(Long userid, Long postid) {
        Optional<Post> post = postRepository.findById(postid);
        if (post.isPresent()) {
            Optional<User> user = userRepository.findById(post.get().getUserid());
            List<Contents> contents = contentsQueryRepository.FindAllByPostidOrderBy(postid);
            List<Tag> tags = tagService.findPostInTag(postid);
            boolean like = likeService.readLike(LikeRequest.builder().postid(postid).userid(userid).build());
            // comment도 같이 줘야됨
            List<CommentResponse> comments = commentService.getPostComment(postid);
            return BaseResponse.builder().status("200").msg("success")
                    .data(PostResponse.builder().userName(user.get().getNickname()).userImage(user.get().getImage())
                            .contents(contents).tags(tags).post(post.get()).like(like).comments(comments).build())
                    .build();
        } else {
            throw new RuntimeException("해당하는 게시글이 없습니다.");
        }
    }

    @Override
    @Transactional
    public BaseResponse createPost(PostRequest newPost) throws IllegalStateException, IOException {
        Long postid = postRepository.save(newPost.toPost(userQueryRepository.findIdByEmail(newPost.getEmail())))
                .getId();
        if (newPost.getContents() != null) {
            contentsRepository.saveAll(FileUtils.uploadFile(newPost.getContents(), postid));
        }
        if (newPost.getTags() != null) {
            tagService.saveTag(newPost.getTags(), postid);
        }
        return BaseResponse.builder().status("200").status("success").build();
    }

    @Override
    @Transactional
    public BaseResponse deletePost(Long postid) {
        tagService.deleteTag(postid);
        List<Contents> reqContents = contentsQueryRepository.FindAllByPostidOrderBy(postid);
        FileUtils.deleteFile(reqContents);
        contentsRepository.deleteAll(reqContents);
        postRepository.deleteById(postid);

        return BaseResponse.builder().status("200").status("success").build();
    }

    @Override
    @Transactional
    public BaseResponse updatePost(PostRequest changePost) throws IllegalStateException, IOException {
        Optional<Post> optPost = postRepository.findById(changePost.getPostid());
        if (optPost.isPresent()) {
            Post post = postRepository.save(changePost.toPost(optPost.get()));
            Optional<User> user = userRepository.findById(post.getUserid());
            // contents
            List<Contents> reqContents = contentsQueryRepository.FindAllByPostidOrderBy(post.getId());
            FileUtils.deleteFile(reqContents);
            List<Contents> contents = contentsRepository
                    .saveAll(FileUtils.uploadFile(changePost.getContents(), post.getId()));
            // 태그
            tagService.deleteTag(post.getId());
            List<Tag> tags = changePost.getTags() != null ? tagService.saveTag(changePost.getTags(), post.getId())
                    : null;
            // like
            boolean like = likeService
                    .readLike(LikeRequest.builder().postid(changePost.getPostid()).userid(user.get().getId()).build());
            return BaseResponse.builder().status("200").status("success")
                    .data(PostResponse.builder().userName(user.get().getNickname()).userImage(user.get().getImage())
                            .contents(contents).tags(tags).post(post).like(like).build())
                    .build();
        }
        throw new RuntimeException("수정하려는 게시글이 없습니다.");
    }

    @Override
    public BaseResponse getExplorePost(LocalDateTime lastTime) {
        List<Post> explorePosts = postQueryRepository.getExplorePost(lastTime);
        List<UserPostResponse> userPostResponse = new ArrayList<>();
        for (Post post : explorePosts) {
            userPostResponse.add(UserPostResponse.builder().post(post)
                    .image(contentsQueryRepository.FindByPostidOrderby(post.getId()).getImage()).build());
        }
        return BaseResponse.builder().status("200").msg("success").data(userPostResponse).build();
    }
}