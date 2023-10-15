package com.back.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.back.entities.Participation;
import com.back.repositories.ParticipationRepository;

@Service

public class ParticipationService {
	@Autowired
	ParticipationRepository pr;

	public List<Participation> findByIdapprenant(Long idapprenant) {

            return pr.findByIdapprenant(idapprenant);
	} 
	

	public List<Participation> findByIdsessionAndEtat(Long idsession, String etat) {
		return pr.findByIdsessionAndEtat(idsession, etat);
	}


	public List<Participation> findByIdapprenantAndEtat(Long idapprenant, String etat) {
		List<Participation> customers= pr.findByIdapprenantAndEtat(idapprenant, etat); 

        if(customers.size() > 0) {
            return customers;
        } else {
            return new ArrayList<Participation>();
        }
	}

	public <S extends Participation> S save(S entity) {
		return pr.save(entity);
	}

	public <S extends Participation> Optional<S> findOne(Example<S> example) {
		return pr.findOne(example);
	}

	public Page<Participation> findAll(Pageable pageable) {
		return pr.findAll(pageable);
	}

	public List<Participation> findAll() {
		return pr.findAll();
	}

	public List<Participation> findAll(Sort sort) {
		return pr.findAll(sort);
	}

	public List<Participation> findAllById(Iterable<Long> ids) {
		return pr.findAllById(ids);
	}

	public <S extends Participation> List<S> saveAll(Iterable<S> entities) {
		return pr.saveAll(entities);
	}

	public Optional<Participation> findById(Long id) {
		return pr.findById(id);
	}

	public void flush() {
		pr.flush();
	}

	public <S extends Participation> S saveAndFlush(S entity) {
		return pr.saveAndFlush(entity);
	}

	public boolean existsById(Long id) {
		return pr.existsById(id);
	}

	public void deleteInBatch(Iterable<Participation> entities) {
		pr.deleteInBatch(entities);
	}

	public <S extends Participation> Page<S> findAll(Example<S> example, Pageable pageable) {
		return pr.findAll(example, pageable);
	}

	public void deleteAllInBatch() {
		pr.deleteAllInBatch();
	}

	public Participation getOne(Long id) {
		return pr.getOne(id);
	}

	public <S extends Participation> long count(Example<S> example) {
		return pr.count(example);
	}

	public <S extends Participation> boolean exists(Example<S> example) {
		return pr.exists(example);
	}

	public <S extends Participation> List<S> findAll(Example<S> example) {
		return pr.findAll(example);
	}

	public long count() {
		return pr.count();
	}

	public void deleteById(Long id) {
		pr.deleteById(id);
	}

	public <S extends Participation> List<S> findAll(Example<S> example, Sort sort) {
		return pr.findAll(example, sort);
	}

	public void delete(Participation entity) {
		pr.delete(entity);
	}

	public void deleteAll(Iterable<? extends Participation> entities) {
		pr.deleteAll(entities);
	}

	public void deleteAll() {
		pr.deleteAll();
	}

	
	
}
