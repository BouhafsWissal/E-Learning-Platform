package com.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.entities.Participation;
import com.back.services.ParticipationService;

@RequestMapping("participation")
@RestController
@CrossOrigin
public class ParticipationController {
	@Autowired
	ParticipationService participationservice;

	@PostMapping(path = "")
	public void saveparticipation(@RequestBody Participation part) {
		participationservice.save(part);
	}

	@PutMapping(path = "")
	public void updateparticipation(@RequestBody Participation part) {
		participationservice.save(part);
	}
	
	 /*@GetMapping(path = "/apprenant/{idapprenant}")
	 public List<Participation>
	  findParticipationByIdapprenant(@PathVariable long idapprenant) { return
	 participationservice.findByIdapprenant(idapprenant); }*/
	 

	@GetMapping(path = "/{idapprenant}/{etat}")
	public List<Participation> findByIdapprenantAndEtat(@PathVariable Long idapprenant, @PathVariable String etat) {
		return participationservice.findByIdapprenantAndEtat(idapprenant, etat);
	} 
	
    @GetMapping(path="/session/{idsession}/{etat}")
    public List<Participation> findByIdsessionAndEtat(@PathVariable Long idsession, @PathVariable String etat) {
		return participationservice.findByIdsessionAndEtat(idsession, etat);
	} 
	
	
	
	@GetMapping(path = "/{id}")
	public Participation findParticipationById(@PathVariable long id) {
		return participationservice.findById(id).get();
	}

	@GetMapping(path = "")
	public List<Participation> GetAllParticipations() {
		return participationservice.findAll();
	}

	@DeleteMapping(path = "/{id}")
	public void deleteParticipation(@PathVariable long id) {
		participationservice.deleteById(id);
	}
}
