package com.back.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Participation {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Long idapprenant ; 
	private Long idsession ; 
	private String nomsession; 
	private String datedeb; 
	private String datefin ; 
	private String nomformateur ;
	private String etat; 
	public Long getIdapprenant() {
		return idapprenant;
	}

	public void setIdapprenant(Long idapprenant) {
		this.idapprenant = idapprenant;
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

	public Long getIdsession() {
		return idsession;
	}

	public void setIdsession(Long idsession) {
		this.idsession = idsession;
	}

	public String getNomsession() {
		return nomsession;
	}

	public void setNomsession(String nomsession) {
		this.nomsession = nomsession;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	@Override
	public String toString() {
		return "Participation [id=" + id + ", idapprenant=" + idapprenant + ", idsession=" + idsession + ", nomsession="
				+ nomsession + ", datedeb=" + datedeb + ", datefin=" + datefin + ", nomformateur=" + nomformateur
				+ ", etat=" + etat + "]";
	}

	public Participation(Long id, Long idapprenant, Long idsession, String nomsession, String datedeb, String datefin,
			String nomformateur, String etat) {
		super();
		this.id = id;
		this.idapprenant = idapprenant;
		this.idsession = idsession;
		this.nomsession = nomsession;
		this.datedeb = datedeb;
		this.datefin = datefin;
		this.nomformateur = nomformateur;
		this.etat = etat;
	}

	public Participation() {
		super();
		// TODO Auto-generated constructor stub
	}

	

}
