package com.web.webcuration.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.web.webcuration.Entity.Tag;
import com.web.webcuration.Entity.TagManage;
import com.web.webcuration.dto.TagDto;
import com.web.webcuration.repository.TagManageRepository;
import com.web.webcuration.repository.TagRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TagServiceImpl implements TagService {

    private final TagRepository tagRepository;
    private final TagManageRepository tagManageRepository;

    @Override
    public void saveTag(List<TagDto> reqTags, Long postid) {

        List<Tag> resTags = new ArrayList<>();
        for (TagDto tag : reqTags) {
            Optional<Tag> findTag = tagRepository.findByName(tag.getTitle());
            if (findTag.isPresent()) {
                resTags.add(tag.toTag(findTag.get().getCount() + 1));
            } else {
                resTags.add(tag.toTag(1));
            }
        }
        List<Tag> resultTag = tagRepository.saveAll(resTags);
        List<TagManage> tagManages = new ArrayList<>();
        for (Tag tag : resultTag) {
            tagManages.add(TagManage.builder().postId(postid).tagId(tag.getId()).build());
        }
        tagManageRepository.saveAll(tagManages);
    }

    @Override
    public List<Tag> findPostInTag(Long postid) {
        List<Tag> tags = new ArrayList<>();
        for (TagManage tagManage : tagManageRepository.findAllBypostId(postid)) {
            Optional<Tag> tag = tagRepository.findById(tagManage.getTagId());
            if (tag.isPresent()) {
                tags.add(tag.get());
            } else {
                throw new RuntimeException("태그 아이디가 존재하지 않습니다.");
            }
        }
        return tags;
    }

}
