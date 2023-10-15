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

import com.back.entities.Gestionnaire;
import com.back.services.GestionnaireService;
@RequestMapping("gestionnaire")
@RestController 
@CrossOrigin
public class Gestionnairecontroller {
	@Autowired
	GestionnaireService gestionnaireservice;

	@PostMapping(path="")
	public void saveApprenant(@RequestBody Gestionnaire gest) {
		 gestionnaireservice.save(gest);
	}

	@GetMapping(path = "")
	public List<Gestionnaire> findAllGestionnaire() {
		return gestionnaireservice.findAll();
	}

	@GetMapping(path = "/{id}")
	public Gestionnaire findestionnaireById(@PathVariable long id) {
		return gestionnaireservice.findById(id).get();
	}

	@PutMapping(path = "")
	public void editGestionaire(@RequestBody Gestionnaire gest) {
		 gestionnaireservice.save(gest);
	}

	@DeleteMapping("/{id}")
	public void deleteGestionnaireById(@PathVariable Long id) {
		gestionnaireservice.deleteById(id);
	}

}
