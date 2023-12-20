package com.byte_transfer.demo.services;

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

    public FileEntity saveFile(MultipartFile file) {
        String fileName = file.getOriginalFilename();

        FileEntity fileEntity = new FileEntity();
        fileEntity.setFileName(fileName);

        return fileRepository.save(fileEntity);
    }
}
