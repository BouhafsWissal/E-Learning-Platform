package com.back.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.back.entities.Message;
import com.back.repositories.MessageRepository;

@Service
public class MessageService {
	@Autowired
	MessageRepository msgrepository;

	public List<Message> findByIdRecepteur(Long idrecepteur) {
		return msgrepository.findByIdrecepteur(idrecepteur);
	}

	public <S extends Message> S save(S entity) {
		return msgrepository.save(entity);
	}

	public <S extends Message> Optional<S> findOne(Example<S> example) {
		return msgrepository.findOne(example);
	}

	public Page<Message> findAll(Pageable pageable) {
		return msgrepository.findAll(pageable);
	}

	public List<Message> findAll() {
		return msgrepository.findAll();
	}

	public List<Message> findAll(Sort sort) {
		return msgrepository.findAll(sort);
	}

	public List<Message> findAllById(Iterable<Long> ids) {
		return msgrepository.findAllById(ids);
	}

	public <S extends Message> List<S> saveAll(Iterable<S> entities) {
		return msgrepository.saveAll(entities);
	}

	public Optional<Message> findById(Long id) {
		return msgrepository.findById(id);
	}

	public void flush() {
		msgrepository.flush();
	}

	public <S extends Message> S saveAndFlush(S entity) {
		return msgrepository.saveAndFlush(entity);
	}

	public boolean existsById(Long id) {
		return msgrepository.existsById(id);
	}

	public void deleteInBatch(Iterable<Message> entities) {
		msgrepository.deleteInBatch(entities);
	}

	public <S extends Message> Page<S> findAll(Example<S> example, Pageable pageable) {
		return msgrepository.findAll(example, pageable);
	}

	public void deleteAllInBatch() {
		msgrepository.deleteAllInBatch();
	}

	public Message getOne(Long id) {
		return msgrepository.getOne(id);
	}

	public <S extends Message> long count(Example<S> example) {
		return msgrepository.count(example);
	}

	public <S extends Message> boolean exists(Example<S> example) {
		return msgrepository.exists(example);
	}

	public <S extends Message> List<S> findAll(Example<S> example) {
		return msgrepository.findAll(example);
	}

	public long count() {
		return msgrepository.count();
	}

	public void deleteById(Long id) {
		msgrepository.deleteById(id);
	}

	public <S extends Message> List<S> findAll(Example<S> example, Sort sort) {
		return msgrepository.findAll(example, sort);
	}

	public void delete(Message entity) {
		msgrepository.delete(entity);
	}

	public void deleteAll(Iterable<? extends Message> entities) {
		msgrepository.deleteAll(entities);
	}

	public void deleteAll() {
		msgrepository.deleteAll();
	}

	
	
}
