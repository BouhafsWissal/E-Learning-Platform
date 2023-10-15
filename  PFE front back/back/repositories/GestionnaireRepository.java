package com.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.entities.Gestionnaire;
@Repository

public interface GestionnaireRepository  extends JpaRepository<Gestionnaire, Long> {

}
