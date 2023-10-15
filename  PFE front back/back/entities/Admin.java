package com.back.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {   
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Long id ; 
	private String email ; 
	private String motdepasse ; 
	private String role ;
	public Number getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMotdepasse() {
		return motdepasse;
	}
	public void setMotdepasse(String motdepasse) {
		this.motdepasse = motdepasse;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "Admin [id=" + id + ", email=" + email + ", motdepasse=" + motdepasse + ", role=" + role + "]";
	}
	public Admin(Long id, String email, String motdepasse, String role) {
		super();
		this.id = id;
		this.email = email;
		this.motdepasse = motdepasse;
		this.role = role;
	}
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	} 
	
	

}

