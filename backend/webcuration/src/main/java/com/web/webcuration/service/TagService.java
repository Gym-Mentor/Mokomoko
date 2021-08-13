package com.web.webcuration.service;

import java.util.List;

import com.web.webcuration.Entity.Tag;
import com.web.webcuration.dto.TagDto;

public interface TagService {

    void saveTag(List<TagDto> reqTags, Long postid);

    List<Tag> findPostInTag(Long postid);
}
