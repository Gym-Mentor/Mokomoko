package com.web.webcuration.utils;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.swing.filechooser.FileSystemView;

import com.web.webcuration.Entity.Contents;
import com.web.webcuration.dto.ContentDto;

import org.springframework.web.multipart.MultipartFile;

public class FileUtils {

    public static List<Contents> uploadFile(List<ContentDto> reqContents, Long postid)
            throws IllegalStateException, IOException {
        List<Contents> resContents = new ArrayList<>();
        String rootPath = FileSystemView.getFileSystemView().getHomeDirectory().toString();
        // local환경
        String basePath = rootPath + "/" + "img";
        // 서버 환경
        // String basePath = "/home/img";
        Integer index = 1;
        for (ContentDto content : reqContents) {
            UUID uuid = UUID.randomUUID();
            String filePath = basePath + "/" + uuid.toString() + getContentType(content.getMedia());
            resContents.add(content.toContents(postid, filePath, index++));
            File dest = new File(filePath);
            content.getMedia().transferTo(dest);
        }
        return resContents;
    }

    public static void deleteFile(List<Contents> reqContents) {
        for (Contents content : reqContents) {
            String filepath = content.getImage();
            File file = new File(filepath);
            if (file.exists()) {
                file.delete();
            }
        }
    }

    public static String uploadProfile(MultipartFile profileImage) throws IllegalStateException, IOException {
        UUID uuid = UUID.randomUUID();
        String rootPath = FileSystemView.getFileSystemView().getHomeDirectory().toString();
        // local환경
        String basePath = rootPath + "/" + "img";
        // 서버 환경
        // String basePath = "/home/img";
        String filePath = basePath + "/" + uuid.toString() + getContentType(profileImage);
        File dest = new File(filePath);
        profileImage.transferTo(dest);

        return filePath;
    }

    public static void deleteProfile(String profileFilePath) {
        File file = new File(profileFilePath);
        if (file.exists()) {
            file.delete();
        }
    }

    public static String getContentType(MultipartFile file) {
        String contentType = file.getContentType();
        String originalFileExtension;
        if (contentType.equals("image/jpeg")) {
            originalFileExtension = ".jpg";
        } else if (contentType.equals("image/png")) {
            originalFileExtension = ".png";
        } else if (contentType.equals("image/gif")) {
            originalFileExtension = ".gif";
        } else {
            throw new RuntimeException("이미지가 아닙니다");
        }
        return originalFileExtension;
    }
}