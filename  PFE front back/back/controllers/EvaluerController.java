package com.back.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.back.entities.Evaluer;

import com.back.services.EvaluerService;

@RequestMapping("evaluer")
@RestController
@CrossOrigin
public class EvaluerController {
	@Autowired
	EvaluerService evaluerservice;

	@PostMapping(path = "")
	public void saveevaluationr(@RequestBody Evaluer evaluation) {
		evaluerservice.save(evaluation);
	}

	@GetMapping(path = "/{idsession}")
	public List<Evaluer> getwithidsession(@PathVariable Long idsession) {
		return evaluerservice.findByIdsession(idsession);
	}

}
