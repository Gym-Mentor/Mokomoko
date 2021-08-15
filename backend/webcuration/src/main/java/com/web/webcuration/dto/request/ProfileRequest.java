package com.web.webcuration.dto.request;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ProfileRequest {

    private Long id;

    private MultipartFile image;

    private String introduce;

    private String nickname;
}
