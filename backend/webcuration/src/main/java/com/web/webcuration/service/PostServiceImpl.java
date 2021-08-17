package com.web.webcuration.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.web.webcuration.Entity.Contents;
import com.web.webcuration.Entity.Post;
import com.web.webcuration.Entity.Tag;
import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.UserPostInfo;
import com.web.webcuration.dto.UserRelationInfo;
import com.web.webcuration.dto.request.ExplorePostRequest;
import com.web.webcuration.dto.request.LikeRequest;
import com.web.webcuration.dto.request.MainFeedRequest;
import com.web.webcuration.dto.request.PostRequest;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.dto.response.CommentResponse;
import com.web.webcuration.dto.response.MainFeedResponse;
import com.web.webcuration.dto.response.PostResponse;
import com.web.webcuration.dto.response.UserPostResponse;
import com.web.webcuration.repository.PostQueryRepository;
import com.web.webcuration.repository.PostRepository;
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
    private final UserService userService;
    private final RelationService relationService;
    private final ContentsService contentService;
    private final PostRepository postRepository;
    private final PostQueryRepository postQueryRepository;

    // 유저의 모든 게시글 출력
    @Override
    public BaseResponse readUserPosts(String email) {
        Long userid = userService.getUserInfo(email).getId();
        List<Post> posts = postQueryRepository.FindByUserPostOrderby(userid);
        List<UserPostInfo> userPostResponse = new ArrayList<>();
        for (Post post : posts) {
            // 썸네일 사진을 어떻게 전해 주는가?..
            userPostResponse.add(UserPostInfo.builder().post(post)
                    .image(contentService.FindByPostidOrderby(post.getId()).getImage()).build());
        }
        UserRelationInfo relationInfo = relationService.getCountUserRelation(userid);
        UserPostResponse postResponse = UserPostResponse.builder().postInfo(userPostResponse).relationInfo(relationInfo)
                .build();
        return BaseResponse.builder().status("200").msg("success").data(postResponse).build();
    }

    // 특정 게시글 출력
    @Override
    // 로그인 한 사람 userid, 게시글 postid
    public BaseResponse getSelectedPost(Long userid, Long postid) {
        Optional<Post> post = postRepository.findById(postid);
        if (post.isPresent()) {
            // 해당 게시글의 유저 정보
            User user = userService.getUserInfo(post.get().getUserid());
            List<Contents> contents = contentService.findAllByPostidOrderBy(postid);
            List<Tag> tags = tagService.findPostInTag(postid);
            boolean like = likeService.readLike(LikeRequest.builder().postid(postid).userid(userid).build());
            // comment도 같이 줘야됨
            List<CommentResponse> comments = commentService.getPostComment(postid);
            return BaseResponse.builder().status("200").msg("success")
                    .data(PostResponse.builder().userName(user.getNickname()).userImage(user.getImage())
                            .contents(contents).tags(tags).post(post.get()).like(like).comments(comments).build())
                    .build();
        } else {
            throw new RuntimeException("해당하는 게시글이 없습니다.");
        }
    }

    @Override
    @Transactional
    public BaseResponse createPost(PostRequest newPost) throws IllegalStateException, IOException {
        Long postid = postRepository.save(newPost.toPost(userService.getUserInfo(newPost.getEmail()).getId())).getId();
        if (newPost.getContents() != null) {
            contentService.saveAllContents(FileUtils.uploadFile(newPost.getContents(), postid));
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

        List<Contents> reqContents = contentService.findAllByPostidOrderBy(postid);
        FileUtils.deleteFile(reqContents);
        contentService.deleteAllContents(reqContents);
        postRepository.deleteById(postid);

        return BaseResponse.builder().status("200").status("success").build();
    }

    @Override
    @Transactional
    public BaseResponse updatePost(PostRequest changePost) throws IllegalStateException, IOException {
        Optional<Post> optPost = postRepository.findById(changePost.getPostid());
        if (optPost.isPresent()) {
            Post post = postRepository.save(changePost.toPost(optPost.get()));
            User user = userService.getUserInfo(post.getUserid());
            // contents
            List<Contents> reqContents = contentService.findAllByPostidOrderBy(post.getId());
            FileUtils.deleteFile(reqContents);
            List<Contents> contents = contentService
                    .saveAllContents(FileUtils.uploadFile(changePost.getContents(), post.getId()));
            // 태그
            tagService.deleteTag(post.getId());
            List<Tag> tags = changePost.getTags() != null ? tagService.saveTag(changePost.getTags(), post.getId())
                    : null;
            // like
            boolean like = likeService
                    .readLike(LikeRequest.builder().postid(changePost.getPostid()).userid(user.getId()).build());
            return BaseResponse
                    .builder().status("200").status("success").data(PostResponse.builder().userName(user.getNickname())
                            .userImage(user.getImage()).contents(contents).tags(tags).post(post).like(like).build())
                    .build();
        }
        throw new RuntimeException("수정하려는 게시글이 없습니다.");
    }

    @Override
    public BaseResponse getExplorePost(ExplorePostRequest explorePostRequest) {
        List<Post> explorePosts = postQueryRepository.getExplorePost(explorePostRequest);
        List<UserPostInfo> userPostResponse = new ArrayList<>();
        for (Post post : explorePosts) {
            userPostResponse.add(UserPostInfo.builder().post(post)
                    .image(contentService.FindByPostidOrderby(post.getId()).getImage()).build());
        }
        return BaseResponse.builder().status("200").msg("success").data(userPostResponse).build();
    }

    @Override
    public List<MainFeedResponse> getMainFeed(MainFeedRequest mainFeedRequest) {
        List<Post> posts = postQueryRepository.getMainFeed(mainFeedRequest);
        List<MainFeedResponse> mainFeedResponses = new ArrayList<>();
        for (Post post : posts) {
            User user = userService.getUserInfo(post.getUserid());
            List<Contents> contents = contentService.findAllByPostidOrderBy(post.getId());
            boolean like = likeService
                    .readLike(LikeRequest.builder().postid(post.getId()).userid(post.getUserid()).build());
            mainFeedResponses.add(MainFeedResponse.builder().image(user.getImage()).nickname(user.getNickname())
                    .post(post).contents(contents).like(like).build());
        }
        return mainFeedResponses;
    }

    @Override
    public void ChangePostCommentCnt(Long postid, Long number) {
        Optional<Post> previousPost = postRepository.findById(postid);
        if (previousPost.isPresent()) {
            Post post = previousPost.get();
            Long changeCommentCnt = post.getComCnt() + number;
            post.setLikeCnt(changeCommentCnt);
            postRepository.save(post);
        } else {
            throw new RuntimeException("해당 게시글이 없습니다.");
        }
    }

    @Override
    public void ChangePostLikeCnt(Long postid, Long number) {
        Optional<Post> previousPost = postRepository.findById(postid);
        if (previousPost.isPresent()) {
            Post post = previousPost.get();
            Long changeLikeCnt = post.getLikeCnt() + number;
            post.setLikeCnt(changeLikeCnt);
            postRepository.save(post);
        } else {
            throw new RuntimeException("해당 게시글이 없습니다.");
        }
    }

}