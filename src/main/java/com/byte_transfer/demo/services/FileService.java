package com.byte_transfer.demo.services;

import java.io.IOException;
import java.util.Date;

// FileService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.byte_transfer.demo.entities.FileEntity;
import com.byte_transfer.demo.repositories.FileRepository;

@Service
public class FileService {

    @Autowired
    private FileRepository fileRepository;

    private static final long MAX_FILE_SIZE = 10 * 1024 * 1024;

    public boolean isFileValid(MultipartFile file) {
        return file != null && file.getSize() <= MAX_FILE_SIZE;
    }

    public FileEntity saveFile(MultipartFile file) {
        String fileName = file.getOriginalFilename();

        FileEntity fileEntity = new FileEntity();
        fileEntity.setFileName(fileName);

        try {
            fileEntity.setFileContent(file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

        Date date = new Date();
        fileEntity.setCreatedAt(date);

        return fileRepository.save(fileEntity);
    }
}
