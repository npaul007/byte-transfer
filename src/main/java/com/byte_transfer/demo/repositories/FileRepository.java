package com.byte_transfer.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.byte_transfer.demo.entities.FileEntity;

public interface FileRepository extends JpaRepository<FileEntity, Long> {
}
