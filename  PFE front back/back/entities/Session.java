package com.back.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Session { 
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String theme;
	private String datedeb;
	private String datefin;
	private String heuredeb;
	private String heurefin;
	private Long prix;
	private Long nombredepace;
	private String idformateur; 
	private String nomformateur ; 
	
	public String getNomformateur() {
		return nomformateur;
	}
	public void setNomformateur(String nomformateur) {
		this.nomformateur = nomformateur;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTheme() {
		return theme;
	}
	public void setTheme(String theme) {
		this.theme = theme;
	}
	public String getDatedeb() {
		return datedeb;
	}
	public void setDatedeb(String datedeb) {
		this.datedeb = datedeb;
	}
	public String getDatefin() {
		return datefin;
	}
	public void setDatefin(String datefin) {
		this.datefin = datefin;
	}
	public String getHeuredeb() {
		return heuredeb;
	}
	public void setHeuredeb(String heuredeb) {
		this.heuredeb = heuredeb;
	}
	public String getHeurefin() {
		return heurefin;
	}
	public void setHeurefin(String heurefin) {
		this.heurefin = heurefin;
	}
	public Long getPrix() {
		return prix;
	}
	public void setPrix(Long prix) {
		this.prix = prix;
	}
	public Long getNombredepace() {
		return nombredepace;
	}
	public void setNombredepace(Long nombredepace) {
		this.nombredepace = nombredepace;
	}
	public String getIdformateur() {
		return idformateur;
	}
	public void setIdformateur(String idformateur) {
		this.idformateur = idformateur;
	}
	@Override
	public String toString() {
		return "Session [id=" + id + ", theme=" + theme + ", datedeb=" + datedeb + ", datefin=" + datefin
				+ ", heuredeb=" + heuredeb + ", heurefin=" + heurefin + ", prix=" + prix + ", nombredepace="
				+ nombredepace + ", idformateur=" + idformateur + ", nomformateur=" + nomformateur + "]";
	}
	public Session(Long id, String theme, String datedeb, String datefin, String heuredeb, String heurefin, Long prix,
			Long nombredepace, String idformateur, String nomformateur) {
		super();
		this.id = id;
		this.theme = theme;
		this.datedeb = datedeb;
		this.datefin = datefin;
		this.heuredeb = heuredeb;
		this.heurefin = heurefin;
		this.prix = prix;
		this.nombredepace = nombredepace;
		this.idformateur = idformateur;
		this.nomformateur = nomformateur;
	}
	public Session() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}