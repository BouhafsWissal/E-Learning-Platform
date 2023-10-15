package com.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.back.entities.Apprenant;
import com.back.repositories.ApprenantRepository;

@Service
public class ApprenantService {
	@Autowired
	ApprenantRepository apprep ;

	public <S extends Apprenant> S save(S entity) {
		return apprep.save(entity);
	}

	public <S extends Apprenant> Optional<S> findOne(Example<S> example) {
		return apprep.findOne(example);
	}

	public Page<Apprenant> findAll(Pageable pageable) {
		return apprep.findAll(pageable);
	}

	public List<Apprenant> findAll() {
		return apprep.findAll();
	}

	public List<Apprenant> findAll(Sort sort) {
		return apprep.findAll(sort);
	}

	public List<Apprenant> findAllById(Iterable<Long> ids) {
		return apprep.findAllById(ids);
	}

	public <S extends Apprenant> List<S> saveAll(Iterable<S> entities) {
		return apprep.saveAll(entities);
	}

	public Optional<Apprenant> findById(Long id) {
		return apprep.findById(id);
	}

	public void flush() {
		apprep.flush();
	}

	public <S extends Apprenant> S saveAndFlush(S entity) {
		return apprep.saveAndFlush(entity);
	}

	public boolean existsById(Long id) {
		return apprep.existsById(id);
	}

	public void deleteInBatch(Iterable<Apprenant> entities) {
		apprep.deleteInBatch(entities);
	}

	public <S extends Apprenant> Page<S> findAll(Example<S> example, Pageable pageable) {
		return apprep.findAll(example, pageable);
	}

	public void deleteAllInBatch() {
		apprep.deleteAllInBatch();
	}

	public Apprenant getOne(Long id) {
		return apprep.getOne(id);
	}

	public <S extends Apprenant> long count(Example<S> example) {
		return apprep.count(example);
	}

	public <S extends Apprenant> boolean exists(Example<S> example) {
		return apprep.exists(example);
	}

	public <S extends Apprenant> List<S> findAll(Example<S> example) {
		return apprep.findAll(example);
	}

	public long count() {
		return apprep.count();
	}

	public void deleteById(Long id) {
		apprep.deleteById(id);
	}

	public <S extends Apprenant> List<S> findAll(Example<S> example, Sort sort) {
		return apprep.findAll(example, sort);
	}

	public void delete(Apprenant entity) {
		apprep.delete(entity);
	}

	public void deleteAll(Iterable<? extends Apprenant> entities) {
		apprep.deleteAll(entities);
	}

	public void deleteAll() {
		apprep.deleteAll();
	} 
	

}
