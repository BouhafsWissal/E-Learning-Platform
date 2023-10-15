package com.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.entities.Formateur;
@Repository

public interface FormateurRepository  extends JpaRepository<Formateur, Long>{

}
