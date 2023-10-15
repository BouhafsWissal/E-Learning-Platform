package com.back.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.entities.Evaluer;

@Repository
public interface EvaluerRepository extends JpaRepository<Evaluer, Long> {

	List<Evaluer> findByIdsession(Long idsession);
}
