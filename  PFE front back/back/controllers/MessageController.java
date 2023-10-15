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
 
import com.back.entities.Message;
import com.back.services.MessageService;

@RestController
@RequestMapping("message") 
@CrossOrigin
public class MessageController {
	@Autowired
	MessageService msgservice;

	@PostMapping(path = "")
	public void savemsg(@RequestBody Message msg) {
		msgservice.save(msg);
	}

	@GetMapping(path = "/{idrecepteur}")
	public List<Message> findByIdRecepteur(@PathVariable long idrecepteur) {
		return msgservice.findByIdRecepteur(idrecepteur);
	}
   @GetMapping(path="")
   public List<Message> GetAllMessages(){ 
	   return  msgservice.findAll() ; 
   } 
   @DeleteMapping(path="/{id}")
   public void deletemessage(@PathVariable long id) {
	   msgservice.deleteById(id);
   }
}
