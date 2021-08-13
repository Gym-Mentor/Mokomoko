package com.web.webcuration.utils;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.swing.filechooser.FileSystemView;

import com.web.webcuration.Entity.Contents;
import com.web.webcuration.dto.ContentDto;

public class FileUtils {

    public static List<Contents> fileUpload(List<ContentDto> reqContents, Long postid)
            throws IllegalStateException, IOException {
        List<Contents> resContents = new ArrayList<>();
        String rootPath = FileSystemView.getFileSystemView().getHomeDirectory().toString();
        String basePath = rootPath + "/" + "img";
        Integer index = 1;
        for (ContentDto content : reqContents) {
            UUID uuid = UUID.randomUUID();
            String contentType = content.getMedia().getContentType();
            String originalFileExtension;
            if (contentType.equals("image/jpeg")) {
                originalFileExtension = ".jpg";
            } else if (contentType.equals("image/png")) {
                originalFileExtension = ".png";
            } else if (contentType.equals("image/gif")) {
                originalFileExtension = "gif";
            } else {
                throw new RuntimeException("이미지가 아닙니다");
            }
            String filePath = basePath + "/" + uuid.toString() + originalFileExtension;
            resContents.add(content.toContents(postid, filePath, index++));
            File dest = new File(filePath);
            content.getMedia().transferTo(dest);
        }
        return resContents;
    }
}
