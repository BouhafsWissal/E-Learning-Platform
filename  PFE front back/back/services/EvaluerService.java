package com.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.back.entities.Evaluer;
import com.back.repositories.EvaluerRepository;

@Service
public class EvaluerService {
	@Autowired
	EvaluerRepository er;

	public List<Evaluer> findByIdsession(Long idsession) {
		return er.findByIdsession(idsession);
	}

	public <S extends Evaluer> S save(S entity) {
		return er.save(entity);
	}

	public <S extends Evaluer> Optional<S> findOne(Example<S> example) {
		return er.findOne(example);
	}

	public Page<Evaluer> findAll(Pageable pageable) {
		return er.findAll(pageable);
	}

	public List<Evaluer> findAll() {
		return er.findAll();
	}

	public List<Evaluer> findAll(Sort sort) {
		return er.findAll(sort);
	}

	public List<Evaluer> findAllById(Iterable<Long> ids) {
		return er.findAllById(ids);
	}

	public <S extends Evaluer> List<S> saveAll(Iterable<S> entities) {
		return er.saveAll(entities);
	}

	public Optional<Evaluer> findById(Long id) {
		return er.findById(id);
	}

	public void flush() {
		er.flush();
	}

	public <S extends Evaluer> S saveAndFlush(S entity) {
		return er.saveAndFlush(entity);
	}

	public boolean existsById(Long id) {
		return er.existsById(id);
	}

	public void deleteInBatch(Iterable<Evaluer> entities) {
		er.deleteInBatch(entities);
	}

	public <S extends Evaluer> Page<S> findAll(Example<S> example, Pageable pageable) {
		return er.findAll(example, pageable);
	}

	public void deleteAllInBatch() {
		er.deleteAllInBatch();
	}

	public Evaluer getOne(Long id) {
		return er.getOne(id);
	}

	public <S extends Evaluer> long count(Example<S> example) {
		return er.count(example);
	}

	public <S extends Evaluer> boolean exists(Example<S> example) {
		return er.exists(example);
	}

	public <S extends Evaluer> List<S> findAll(Example<S> example) {
		return er.findAll(example);
	}

	public long count() {
		return er.count();
	}

	public void deleteById(Long id) {
		er.deleteById(id);
	}

	public <S extends Evaluer> List<S> findAll(Example<S> example, Sort sort) {
		return er.findAll(example, sort);
	}

	public void delete(Evaluer entity) {
		er.delete(entity);
	}

	public void deleteAll(Iterable<? extends Evaluer> entities) {
		er.deleteAll(entities);
	}

	public void deleteAll() {
		er.deleteAll();
	}

}
