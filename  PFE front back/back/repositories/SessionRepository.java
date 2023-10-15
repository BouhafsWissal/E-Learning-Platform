package com.back.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


import com.back.entities.Session;

@Repository
public interface SessionRepository extends JpaRepository<Session, Long> { 
	List<Session> findByIdformateur(String idformateur); 
		
		                                             

}
