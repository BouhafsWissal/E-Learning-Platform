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

import com.back.entities.Formateur;
import com.back.services.Formateurservice;



@RequestMapping("formateur")
@RestController 
@CrossOrigin
public class FormateurController {
@Autowired
Formateurservice formateurservice ; 
@PostMapping(path = "" )
public void saveFormateur (@RequestBody Formateur form){
	 formateurservice.save(form) ; 	
}

@GetMapping(path = "")
public List<Formateur> findAllformateur ()  { 
	return formateurservice.findAll() ;
}

@GetMapping(path = "/{id}")
public Formateur findFormateurById (@PathVariable long id)  { 
	return formateurservice.findById(id).get() ;
}

@PutMapping(path="")
public void editCommande (@RequestBody Formateur form){
	 formateurservice.save(form) ; 	
}
@DeleteMapping("/{id}")
public void deleteFormateurById ( @PathVariable Long id){
	formateurservice.deleteById(id);			
}
}
