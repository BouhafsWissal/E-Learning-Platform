package com.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.back.entities.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, Long> {

}