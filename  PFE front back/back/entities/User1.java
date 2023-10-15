package com.back.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User1 {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nom;
	private String prenom;
	private Number cin;
	private String email;
	private Number tel;
	private String datenaissance;
	private String motdepasse;
	private String role;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
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

	public String getDatenaissance() {
		return datenaissance;
	}

	public void setDatenaissance(String datenaissance) {
		this.datenaissance = datenaissance;
	}

	public Number getCin() {
		return cin;
	}

	public void setCin(Number cin) {
		this.cin = cin;
	}

	public Number getTel() {
		return tel;
	}

	public void setTel(Number tel) {
		this.tel = tel;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User1 [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email + ", motdepasse="
				+ motdepasse + ", datenaissance=" + datenaissance + ", cin=" + cin + ", tel=" + tel + ", role=" + role
				+ "]";
	}

	

	public User1(Long id, String nom, String prenom, Number cin, String email, Number tel, String datenaissance,
			String motdepasse, String role) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.cin = cin;
		this.email = email;
		this.tel = tel;
		this.datenaissance = datenaissance;
		this.motdepasse = motdepasse;
		this.role = role;
	}

	public User1() {
		super();
		// TODO Auto-generated constructor stub
	}

	

}
