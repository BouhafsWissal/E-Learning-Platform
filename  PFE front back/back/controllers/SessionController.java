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

import com.back.entities.Session;
import com.back.services.SessionService;

@RequestMapping("session")
@RestController
@CrossOrigin
public class SessionController {
	@Autowired
	SessionService sessionservice;

	@PostMapping(path = "")
	public Session saveApprenant(@RequestBody Session s) {
		return sessionservice.save(s);
	}

	@GetMapping(path = "")
	public List<Session> findAllsession() {
		return sessionservice.findAll();
	}
    @GetMapping(path="/formateur/{idformateur}")
	public List<Session> findByIdformateur(@PathVariable String idformateur ){
    	return sessionservice.findByIdformateur(idformateur); 
    }
    
	@GetMapping(path = "/{id}")
	public Session findsessionById(@PathVariable long id) {
		return sessionservice.findById(id).get();
	}

	@PutMapping(path = "")
	public Session editsession(@RequestBody Session s) {
		return sessionservice.save(s);
	}

	@DeleteMapping("/{id}")
	public void deletesessionById(@PathVariable Long id) {
		sessionservice.deleteById(id);
	}
}
