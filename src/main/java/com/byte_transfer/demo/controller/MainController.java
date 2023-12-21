package com.byte_transfer.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.byte_transfer.demo.entities.FileEntity;
import com.byte_transfer.demo.services.FileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
@RequestMapping(value ="/", method=RequestMethod.GET)
public class MainController {

    @Autowired
    private FileService fileService;

    @GetMapping("")
    public String index() {
        return "Hello World";
    }

    @PostMapping("/upload")
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
        try {
            if(!fileService.isFileValid(file)) {
                throw new Exception("File size of 10mb exceeded");
            }
            
            FileEntity savedFile = fileService.saveFile(file);
            return ResponseEntity.ok().body("{\"message\": \"The file has been uploaded successfully\",\"id\":" + savedFile.getId()+"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("{message:"+e.getMessage()+"}");
        }
    }
}
