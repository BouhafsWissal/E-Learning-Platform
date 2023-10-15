package com.back.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.back.entities.User1;

@Repository
public interface UserRepository extends JpaRepository<User1, Long> {
	List<User1> findByRole(String role);

	User1 findByEmail(String email);

	Boolean existsByEmail(String email);
  
}
