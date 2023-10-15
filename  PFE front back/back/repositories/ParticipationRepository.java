package com.back.repositories;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.back.entities.Participation;

@Repository
public interface ParticipationRepository extends JpaRepository<Participation, Long> {
	List<Participation> findByIdapprenant(Long idapprenant); 
	
	@Query("select u from Participation u where (u.idapprenant = :idapprenant)"
		      +" and (u.etat = :etat)")
		List<Participation> findByIdapprenantAndEtat(@Param("idapprenant") Long idapprenant ,
		                                              @Param("etat") String etat); 
	
	@Query("select u from Participation u where (u.idsession = :idsession)"
		      +" and (u.etat = :etat)")
		List<Participation> findByIdsessionAndEtat(@Param("idsession") Long idsession ,
		                                              @Param("etat") String etat);
} 
