package com.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.back.entities.Gestionnaire;
import com.back.repositories.GestionnaireRepository;

@Service
public class GestionnaireService {
@Autowired
GestionnaireRepository gr ;

public <S extends Gestionnaire> S save(S entity) {
	return gr.save(entity);
}

public <S extends Gestionnaire> Optional<S> findOne(Example<S> example) {
	return gr.findOne(example);
}

public Page<Gestionnaire> findAll(Pageable pageable) {
	return gr.findAll(pageable);
}

public List<Gestionnaire> findAll() {
	return gr.findAll();
}

public List<Gestionnaire> findAll(Sort sort) {
	return gr.findAll(sort);
}

public List<Gestionnaire> findAllById(Iterable<Long> ids) {
	return gr.findAllById(ids);
}

public <S extends Gestionnaire> List<S> saveAll(Iterable<S> entities) {
	return gr.saveAll(entities);
}

public Optional<Gestionnaire> findById(Long id) {
	return gr.findById(id);
}

public void flush() {
	gr.flush();
}

public <S extends Gestionnaire> S saveAndFlush(S entity) {
	return gr.saveAndFlush(entity);
}

public boolean existsById(Long id) {
	return gr.existsById(id);
}

public void deleteInBatch(Iterable<Gestionnaire> entities) {
	gr.deleteInBatch(entities);
}

public <S extends Gestionnaire> Page<S> findAll(Example<S> example, Pageable pageable) {
	return gr.findAll(example, pageable);
}

public void deleteAllInBatch() {
	gr.deleteAllInBatch();
}

public Gestionnaire getOne(Long id) {
	return gr.getOne(id);
}

public <S extends Gestionnaire> long count(Example<S> example) {
	return gr.count(example);
}

public <S extends Gestionnaire> boolean exists(Example<S> example) {
	return gr.exists(example);
}

public <S extends Gestionnaire> List<S> findAll(Example<S> example) {
	return gr.findAll(example);
}

public long count() {
	return gr.count();
}

public void deleteById(Long id) {
	gr.deleteById(id);
}

public <S extends Gestionnaire> List<S> findAll(Example<S> example, Sort sort) {
	return gr.findAll(example, sort);
}

public void delete(Gestionnaire entity) {
	gr.delete(entity);
}

public void deleteAll(Iterable<? extends Gestionnaire> entities) {
	gr.deleteAll(entities);
}

public void deleteAll() {
	gr.deleteAll();
}  


}
