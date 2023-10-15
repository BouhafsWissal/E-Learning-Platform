package com.back.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.entities.Reclamation;
import com.back.services.ReclamationService;

@RequestMapping("reclamation")
@RestController 
@CrossOrigin
public class ReclamationController {
	@Autowired
	ReclamationService reclamationservice;

	@PostMapping(path = "")
	public void addreclamation(@RequestBody Reclamation R) {
		this.reclamationservice.save(R);
	}

	@GetMapping(path = "")
	public List<Reclamation> getallreclamation() {
		return this.reclamationservice.findAll();
	}
	@DeleteMapping(path = "/{id}") // delete user with id
	public void deletereclamation(@PathVariable long id) {
		reclamationservice.deleteById(id); 

	}
}
