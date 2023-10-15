package com.back.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.back.entities.User1;
import com.back.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository ur;

	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	public String RegisterUser1(User1 user1) {
		if (ur.existsByEmail(user1.getEmail())) {
			return "{\"error\":\" user with email :" + user1.getEmail() + "already exists\"}";
		} else {

			
			String hashPW=bCryptPasswordEncoder.encode(user1.getMotdepasse());
			user1.setMotdepasse(hashPW);
			ur.save(user1);
			return "{\"message\":\"success\"}" ; 
		}

	}

	public User1 findByEmail(String email) {
		return ur.findByEmail(email);
	}

	public List<User1> findByRole(String role) {
		return ur.findByRole(role);
	}

	public <S extends User1> S save(S entity) {
		return ur.save(entity);
	}

	public <S extends User1> Optional<S> findOne(Example<S> example) {
		return ur.findOne(example);
	}

	public Page<User1> findAll(Pageable pageable) {
		return ur.findAll(pageable);
	}

	public List<User1> findAll() {
		return ur.findAll();
	}

	public List<User1> findAll(Sort sort) {
		return ur.findAll(sort);
	}

	public List<User1> findAllById(Iterable<Long> ids) {
		return ur.findAllById(ids);
	}

	public <S extends User1> List<S> saveAll(Iterable<S> entities) {
		return ur.saveAll(entities);
	}

	public Optional<User1> findById(Long id) {
		return ur.findById(id);
	}

	public void flush() {
		ur.flush();
	}

	public <S extends User1> S saveAndFlush(S entity) {
		return ur.saveAndFlush(entity);
	}

	public boolean existsById(Long id) {
		return ur.existsById(id);
	}

	public void deleteInBatch(Iterable<User1> entities) {
		ur.deleteInBatch(entities);
	}

	public <S extends User1> Page<S> findAll(Example<S> example, Pageable pageable) {
		return ur.findAll(example, pageable);
	}

	public void deleteAllInBatch() {
		ur.deleteAllInBatch();
	}

	public User1 getOne(Long id) {
		return ur.getOne(id);
	}

	public <S extends User1> long count(Example<S> example) {
		return ur.count(example);
	}

	public <S extends User1> boolean exists(Example<S> example) {
		return ur.exists(example);
	}

	public <S extends User1> List<S> findAll(Example<S> example) {
		return ur.findAll(example);
	}

	public long count() {
		return ur.count();
	}

	public void deleteById(Long id) {
		ur.deleteById(id);
	}

	public <S extends User1> List<S> findAll(Example<S> example, Sort sort) {
		return ur.findAll(example, sort);
	}

	public void delete(User1 entity) {
		ur.delete(entity);
	}

	public void deleteAll(Iterable<? extends User1> entities) {
		ur.deleteAll(entities);
	}

	public void deleteAll() {
		ur.deleteAll();
	}

}
