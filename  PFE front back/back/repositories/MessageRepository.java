package com.back.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.entities.Message;
 

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
	List<Message> findByIdrecepteur(Long idrecepteur);
}
