package com.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.back.entities.Reclamation;
import com.back.repositories.ReclamationRepository;

@Service
public class ReclamationService {
    @Autowired
    ReclamationRepository rr ;

	public <S extends Reclamation> S save(S entity) {
		return rr.save(entity);
	}

	public <S extends Reclamation> Optional<S> findOne(Example<S> example) {
		return rr.findOne(example);
	}

	public Page<Reclamation> findAll(Pageable pageable) {
		return rr.findAll(pageable);
	}

	public List<Reclamation> findAll() {
		return rr.findAll();
	}

	public List<Reclamation> findAll(Sort sort) {
		return rr.findAll(sort);
	}

	public List<Reclamation> findAllById(Iterable<Long> ids) {
		return rr.findAllById(ids);
	}

	public <S extends Reclamation> List<S> saveAll(Iterable<S> entities) {
		return rr.saveAll(entities);
	}

	public Optional<Reclamation> findById(Long id) {
		return rr.findById(id);
	}

	public void flush() {
		rr.flush();
	}

	public <S extends Reclamation> S saveAndFlush(S entity) {
		return rr.saveAndFlush(entity);
	}

	public boolean existsById(Long id) {
		return rr.existsById(id);
	}

	public void deleteInBatch(Iterable<Reclamation> entities) {
		rr.deleteInBatch(entities);
	}

	public <S extends Reclamation> Page<S> findAll(Example<S> example, Pageable pageable) {
		return rr.findAll(example, pageable);
	}

	public void deleteAllInBatch() {
		rr.deleteAllInBatch();
	}

	public Reclamation getOne(Long id) {
		return rr.getOne(id);
	}

	public <S extends Reclamation> long count(Example<S> example) {
		return rr.count(example);
	}

	public <S extends Reclamation> boolean exists(Example<S> example) {
		return rr.exists(example);
	}

	public <S extends Reclamation> List<S> findAll(Example<S> example) {
		return rr.findAll(example);
	}

	public long count() {
		return rr.count();
	}

	public void deleteById(Long id) {
		rr.deleteById(id);
	}

	public <S extends Reclamation> List<S> findAll(Example<S> example, Sort sort) {
		return rr.findAll(example, sort);
	}

	public void delete(Reclamation entity) {
		rr.delete(entity);
	}

	public void deleteAll(Iterable<? extends Reclamation> entities) {
		rr.deleteAll(entities);
	}

	public void deleteAll() {
		rr.deleteAll();
	}  
    
	
	
}
