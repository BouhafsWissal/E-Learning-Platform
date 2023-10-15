package com.back.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Message {  
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
    private Long idemetteur ; 
    private String nomemetteur ; 
    private Long idrecepteur ; 
    private String message ;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdemetteur() {
		return idemetteur;
	}
	public void setIdemetteur(Long idemetteur) {
		this.idemetteur = idemetteur;
	}
	public String getNomemetteur() {
		return nomemetteur;
	}
	public void setNomemetteur(String nomemetteur) {
		this.nomemetteur = nomemetteur;
	}
	public Long getIdrecepteur() {
		return idrecepteur;
	}
	public void setIdrecepteur(Long idrecepteur) {
		this.idrecepteur = idrecepteur;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "Message [id=" + id + ", idemetteur=" + idemetteur + ", nomemetteur=" + nomemetteur + ", idrecepteur="
				+ idrecepteur + ", message=" + message + "]";
	}
	public Message(Long id, Long idemetteur, String nomemetteur, Long idrecepteur, String message) {
		super();
		this.id = id;
		this.idemetteur = idemetteur;
		this.nomemetteur = nomemetteur;
		this.idrecepteur = idrecepteur;
		this.message = message;
	}
	public Message() {
		super();
		// TODO Auto-generated constructor stub
	} 
    







}
