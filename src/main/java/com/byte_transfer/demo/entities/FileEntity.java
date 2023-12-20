package com.byte_transfer.demo.entities;

// FileEntity.java
import jakarta.persistence.*;

@Entity
@Table(name = "files")
public class FileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] fileContent;

    public void setFileName(String fileName2) {
        this.fileName = fileName2;
    }

    public Long getId() {
        return this.id;
    }

    public String getFileName() {
        return this.fileName;
    }

    public void setFileContent(byte[] fileContent) {
        this.fileContent = fileContent;
    }

    public byte[] getFileContent() {
        return this.fileContent;
    }
}