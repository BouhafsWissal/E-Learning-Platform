package com.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.back.entities.Formateur;
import com.back.repositories.FormateurRepository;

@Service
public class Formateurservice {
	@Autowired
	FormateurRepository fr;

	public <S extends Formateur> S save(S entity) {
		return fr.save(entity);
	}

	public <S extends Formateur> Optional<S> findOne(Example<S> example) {
		return fr.findOne(example);
	}

	public Page<Formateur> findAll(Pageable pageable) {
		return fr.findAll(pageable);
	}

	public List<Formateur> findAll() {
		return fr.findAll();
	}

	public List<Formateur> findAll(Sort sort) {
		return fr.findAll(sort);
	}

	public List<Formateur> findAllById(Iterable<Long> ids) {
		return fr.findAllById(ids);
	}

	public <S extends Formateur> List<S> saveAll(Iterable<S> entities) {
		return fr.saveAll(entities);
	}

	public Optional<Formateur> findById(Long id) {
		return fr.findById(id);
	}

	public void flush() {
		fr.flush();
	}

	public <S extends Formateur> S saveAndFlush(S entity) {
		return fr.saveAndFlush(entity);
	}

	public boolean existsById(Long id) {
		return fr.existsById(id);
	}

	public void deleteInBatch(Iterable<Formateur> entities) {
		fr.deleteInBatch(entities);
	}

	public <S extends Formateur> Page<S> findAll(Example<S> example, Pageable pageable) {
		return fr.findAll(example, pageable);
	}

	public void deleteAllInBatch() {
		fr.deleteAllInBatch();
	}

	public Formateur getOne(Long id) {
		return fr.getOne(id);
	}

	public <S extends Formateur> long count(Example<S> example) {
		return fr.count(example);
	}

	public <S extends Formateur> boolean exists(Example<S> example) {
		return fr.exists(example);
	}

	public <S extends Formateur> List<S> findAll(Example<S> example) {
		return fr.findAll(example);
	}

	public long count() {
		return fr.count();
	}

	public void deleteById(Long id) {
		fr.deleteById(id);
	}

	public <S extends Formateur> List<S> findAll(Example<S> example, Sort sort) {
		return fr.findAll(example, sort);
	}

	public void delete(Formateur entity) {
		fr.delete(entity);
	}

	public void deleteAll(Iterable<? extends Formateur> entities) {
		fr.deleteAll(entities);
	}

	public void deleteAll() {
		fr.deleteAll();
	}
 
}
