package com.web.webcuration.service;

import java.util.List;

import com.web.webcuration.Entity.Tag;
import com.web.webcuration.Entity.User;
import com.web.webcuration.dto.UserPostInfo;
import com.web.webcuration.dto.response.BaseResponse;
import com.web.webcuration.dto.response.RankResponse;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RankServiceImpl implements RankService {

    private final TagService tagService;
    private final UserService userService;
    private final PostService postService;

    public BaseResponse getRankList() {
        List<Tag> tags = tagService.getRankTags();
        List<User> users = userService.getRankUsers();
        List<UserPostInfo> postInfos = postService.getRankPosts();
        // RankResponse
        return BaseResponse.builder().status("200").msg("success")
                .data(RankResponse.builder().tags(tags).users(users).postInfos(postInfos).build()).build();
    }

}
