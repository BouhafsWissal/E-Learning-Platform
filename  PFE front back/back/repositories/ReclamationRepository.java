package com.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.entities.Reclamation;
@Repository
public interface ReclamationRepository extends JpaRepository<Reclamation, Long>{

}
