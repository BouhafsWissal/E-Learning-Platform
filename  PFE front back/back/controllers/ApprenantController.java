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

import com.back.entities.Apprenant;
import com.back.services.ApprenantService;



@RequestMapping("apprenant")
@RestController 
@CrossOrigin
public class ApprenantController {
	@Autowired
	ApprenantService apprenantservice;

	@PostMapping(path="")
	public Apprenant saveApprenant(@RequestBody Apprenant app) {
		return apprenantservice.save(app);
	}

	@GetMapping(path = "")
	public List<Apprenant> findAllApprenan() {
		return apprenantservice.findAll();
	}

	@GetMapping(path = "/{id}")
	public Apprenant findApprenantById(@PathVariable long id) {
		return apprenantservice.findById(id).get();
	}

	@PutMapping(path = "")
	public Apprenant editApprenant(@RequestBody Apprenant app) {
		return apprenantservice.save(app);
	}

	@DeleteMapping("/{id}")
	public void deleteApprenantById(@PathVariable Long id) {
		apprenantservice.deleteById(id);
	}
}
