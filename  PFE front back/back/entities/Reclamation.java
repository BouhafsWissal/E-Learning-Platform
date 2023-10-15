package com.back.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Reclamation {  
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id ;  
	private String theme ; 
	private String texte ; 
	private String mailemetteur ;
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
	public String getTexte() {
		return texte;
	}
	public void setTexte(String texte) {
		this.texte = texte;
	}
	public String getMailemetteur() {
		return mailemetteur;
	}
	public void setMailemetteur(String mailemetteur) {
		this.mailemetteur = mailemetteur;
	}
	@Override
	public String toString() {
		return "Reclamation [id=" + id + ", theme=" + theme + ", texte=" + texte + ", mailemetteur=" + mailemetteur
				+ "]";
	}
	public Reclamation(Long id, String theme, String texte, String mailemetteur) {
		super();
		this.id = id;
		this.theme = theme;
		this.texte = texte;
		this.mailemetteur = mailemetteur;
	}
	public Reclamation() {
		super();
		// TODO Auto-generated constructor stub
	} 
	
	
	

}
