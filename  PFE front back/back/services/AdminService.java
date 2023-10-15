package com.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.back.entities.Admin;
import com.back.repositories.AdminRepository;

@Service
public class AdminService {
@Autowired 
AdminRepository adrep ;

public <S extends Admin> S save(S entity) {
	return adrep.save(entity);
}

public <S extends Admin> Optional<S> findOne(Example<S> example) {
	return adrep.findOne(example);
}

public Page<Admin> findAll(Pageable pageable) {
	return adrep.findAll(pageable);
}

public List<Admin> findAll() {
	return adrep.findAll();
}

public List<Admin> findAll(Sort sort) {
	return adrep.findAll(sort);
}

public List<Admin> findAllById(Iterable<Long> ids) {
	return adrep.findAllById(ids);
}

public <S extends Admin> List<S> saveAll(Iterable<S> entities) {
	return adrep.saveAll(entities);
}

public Optional<Admin> findById(Long id) {
	return adrep.findById(id);
}

public void flush() {
	adrep.flush();
}

public <S extends Admin> S saveAndFlush(S entity) {
	return adrep.saveAndFlush(entity);
}

public boolean existsById(Long id) {
	return adrep.existsById(id);
}

public void deleteInBatch(Iterable<Admin> entities) {
	adrep.deleteInBatch(entities);
}

public <S extends Admin> Page<S> findAll(Example<S> example, Pageable pageable) {
	return adrep.findAll(example, pageable);
}

public void deleteAllInBatch() {
	adrep.deleteAllInBatch();
}

public Admin getOne(Long id) {
	return adrep.getOne(id);
}

public <S extends Admin> long count(Example<S> example) {
	return adrep.count(example);
}

public <S extends Admin> boolean exists(Example<S> example) {
	return adrep.exists(example);
}

public <S extends Admin> List<S> findAll(Example<S> example) {
	return adrep.findAll(example);
}

public long count() {
	return adrep.count();
}

public void deleteById(Long id) {
	adrep.deleteById(id);
}

public <S extends Admin> List<S> findAll(Example<S> example, Sort sort) {
	return adrep.findAll(example, sort);
}

public void delete(Admin entity) {
	adrep.delete(entity);
}

public void deleteAll(Iterable<? extends Admin> entities) {
	adrep.deleteAll(entities);
}

public void deleteAll() {
	adrep.deleteAll();
} 

}
