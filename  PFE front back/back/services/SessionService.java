package com.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.back.entities.Session;
import com.back.repositories.SessionRepository;

@Service
public class SessionService { 
	@Autowired
	SessionRepository sr ;

	public List<Session> findByIdformateur(String idformateur) {
		return sr.findByIdformateur(idformateur);
	}

	public <S extends Session> S save(S entity) {
		return sr.save(entity);
	}

	public <S extends Session> Optional<S> findOne(Example<S> example) {
		return sr.findOne(example);
	}

	public Page<Session> findAll(Pageable pageable) {
		return sr.findAll(pageable);
	}

	public List<Session> findAll() {
		return sr.findAll();
	}

	public List<Session> findAll(Sort sort) {
		return sr.findAll(sort);
	}

	public List<Session> findAllById(Iterable<Long> ids) {
		return sr.findAllById(ids);
	}

	public <S extends Session> List<S> saveAll(Iterable<S> entities) {
		return sr.saveAll(entities);
	}

	public Optional<Session> findById(Long id) {
		return sr.findById(id);
	}

	public void flush() {
		sr.flush();
	}

	public <S extends Session> S saveAndFlush(S entity) {
		return sr.saveAndFlush(entity);
	}

	public boolean existsById(Long id) {
		return sr.existsById(id);
	}

	public void deleteInBatch(Iterable<Session> entities) {
		sr.deleteInBatch(entities);
	}

	public <S extends Session> Page<S> findAll(Example<S> example, Pageable pageable) {
		return sr.findAll(example, pageable);
	}

	public void deleteAllInBatch() {
		sr.deleteAllInBatch();
	}

	public Session getOne(Long id) {
		return sr.getOne(id);
	}

	public <S extends Session> long count(Example<S> example) {
		return sr.count(example);
	}

	public <S extends Session> boolean exists(Example<S> example) {
		return sr.exists(example);
	}

	public <S extends Session> List<S> findAll(Example<S> example) {
		return sr.findAll(example);
	}

	public long count() {
		return sr.count();
	}

	public void deleteById(Long id) {
		sr.deleteById(id);
	}

	public <S extends Session> List<S> findAll(Example<S> example, Sort sort) {
		return sr.findAll(example, sort);
	}

	public void delete(Session entity) {
		sr.delete(entity);
	}

	public void deleteAll(Iterable<? extends Session> entities) {
		sr.deleteAll(entities);
	}

	public void deleteAll() {
		sr.deleteAll();
	}

	
	
}
