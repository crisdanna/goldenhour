package br.com.fiap.goldenhour.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.goldenhour.dto.PatientDto;
import br.com.fiap.goldenhour.service.PatientService;
import br.com.fiap.goldenhour.util.PatientEntityDTOConverter;

@RestController
@RequestMapping("patient")
public class PatientController {

	@Autowired
	private PatientService service;
	
	@Autowired
	private PatientEntityDTOConverter patientConverter;
	
	@PostMapping
	public void savePatient(@RequestBody PatientDto patient) {
		this.service.savePatient(patientConverter.convertToEntity(patient));
	}
	
	@GetMapping("/{id}")
	public PatientDto getPatient(@PathVariable("id") Long id) {
		PatientDto patient = patientConverter.convertToDto(this.service.getPatient(id));
		return patient;
	}
}
