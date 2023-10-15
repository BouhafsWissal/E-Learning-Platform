package com.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.entities.Apprenant;
@Repository

public interface ApprenantRepository  extends JpaRepository<Apprenant, Long>{

}
