package com.back.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Evaluer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Long idapp;
	private String nom;
	private String prenom;
	private Long idsession;
	private String theme;
	private String rep1;
	private String rep2;
	private String rep3;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdapp() {
		return idapp;
	}

	public void setIdapp(Long idapp) {
		this.idapp = idapp;
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

	public Long getIdsession() {
		return idsession;
	}

	public void setIdsession(Long idsession) {
		this.idsession = idsession;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public String getRep1() {
		return rep1;
	}

	public void setRep1(String rep1) {
		this.rep1 = rep1;
	}

	public String getRep2() {
		return rep2;
	}

	public void setRep2(String rep2) {
		this.rep2 = rep2;
	}

	public String getRep3() {
		return rep3;
	}

	public void setRep3(String rep3) {
		this.rep3 = rep3;
	}

	@Override
	public String toString() {
		return "Evaluer [id=" + id + ", idapp=" + idapp + ", nom=" + nom + ", prenom=" + prenom + ", idsession="
				+ idsession + ", theme=" + theme + ", rep1=" + rep1 + ", rep2=" + rep2 + ", rep3=" + rep3 + "]";
	}

	public Evaluer(Long id, Long idapp, String nom, String prenom, Long idsession, String theme, String rep1,
			String rep2, String rep3) {
		super();
		this.id = id;
		this.idapp = idapp;
		this.nom = nom;
		this.prenom = prenom;
		this.idsession = idsession;
		this.theme = theme;
		this.rep1 = rep1;
		this.rep2 = rep2;
		this.rep3 = rep3;
	}

	public Evaluer() {
		super();
		// TODO Auto-generated constructor stub
	}

}
