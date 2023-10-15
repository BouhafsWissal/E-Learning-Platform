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

import com.back.entities.User1;
import com.back.services.UserService;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {
	@Autowired
	UserService userservice;
    
	@PostMapping(path="/register") 
	public String RegisterUser(@RequestBody User1 user) {
		return userservice.RegisterUser1(user); 
	} 
	
	
	@PostMapping(path = "") // adduser
	public void saveuser(@RequestBody User1 user1) {
		userservice.save(user1);
	}

	@PutMapping(path = "") // updateuser
	public void updateuser(@RequestBody User1 user1) {
		userservice.save(user1);
	}

	

	@GetMapping(path = "/{id}") // get user with id
	public User1 findUserById(@PathVariable long id) {
		return userservice.findById(id).get();
	}

	@GetMapping(path = "/role/{role}") // get users with role
	public List<User1> getUserWithRole(@PathVariable String role) {
		return userservice.findByRole(role); 
	}

	
	@GetMapping(path = "") // get all users
	public List<User1> GetAllUsers() {
		return userservice.findAll();
	}

	@DeleteMapping(path = "/{id}") // delete user with id
	public void deleteuser(@PathVariable long id) {
		userservice.deleteById(id);

	}
}
