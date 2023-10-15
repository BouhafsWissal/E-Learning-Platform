package com.back.entities;




import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;




@Entity
public class Formateur {
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Long id;
	private String nom;
	private String prenom;
	private String email;
	private String motdepasse;
	private String datenaissance;
	private Number cin;
	private Number tel;
	private String role;

	public Number getId() {
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
		return "Formateur [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email + ", motdepasse="
				+ motdepasse + ", datenaissance=" + datenaissance + ", cin=" + cin + ", tel=" + tel + ", role=" + role
				+ "]";
	}

	public Formateur(Long id, String nom, String prenom, String email, String motdepasse, String datenaissance, Number cin,
			Number tel, String role) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.motdepasse = motdepasse;
		this.datenaissance = datenaissance;
		this.cin = cin;
		this.tel = tel;
		this.role = role;
	}

	public Formateur() {
		super();
		// TODO Auto-generated constructor stub
	}

}
