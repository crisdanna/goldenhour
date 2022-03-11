package br.com.fiap.goldenhour.questionnaire.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.goldenhour.questionnaire.dao.bean.PatientHealthForm;
import br.com.fiap.goldenhour.questionnaire.dto.PatientHealthFormDto;
import br.com.fiap.goldenhour.questionnaire.service.PatientHealthFormService;
import br.com.fiap.goldenhour.questionnaire.util.PatientEntityDTOConverter;

/**
 * This is the controller class for the patient's health form
 * The services called here will manage the form and store it for future use
 * @author cristiane
 *
 */
@RestController
@RequestMapping("healthForm")
public class PatientHealthFormController {
	private static transient Logger logger = LoggerFactory.getLogger(PatientHealthFormController.class);
	
	@Autowired
	private PatientHealthFormService service;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PatientEntityDTOConverter patientConverter;
	
	@PostMapping
	public PatientHealthFormDto savePatientHealthForm(@RequestBody PatientHealthFormDto patientHealthForm) {
		PatientHealthForm savedPatientHealthForm = this.service.savePatientHealthForm(convertToEntity(patientHealthForm));
		return this.convertToDto(savedPatientHealthForm);
	}
	
	@GetMapping("/{id}")
	public PatientHealthFormDto getPatientHealthForm(@PathVariable("id") Long id) {
		return convertToDto(this.service.getPatientHealthForm(id));
	}
	
	@GetMapping("/patient/{id}")
	public PatientHealthFormDto getPatientHealthFormsByPatient(@PathVariable("id") Long id) {
		return convertToDto(this.service.getPatientHealthFormByPatientId(id));
	}
	
	private PatientHealthFormDto convertToDto(PatientHealthForm patientHealthForm) {
		PatientHealthFormDto patientHealthFormDto = modelMapper.map(patientHealthForm, PatientHealthFormDto.class);
		patientHealthFormDto.setPatient(patientConverter.convertPatientToDto(patientHealthForm.getPatient()));
		patientHealthFormDto.setDate(patientHealthForm.getDate().format(DateTimeFormatter.ofPattern("MM/dd/yyyy")));
		
	    return patientHealthFormDto;
	}
	
	private PatientHealthForm convertToEntity(PatientHealthFormDto patientHealthFormDto){
		PatientHealthForm patientHealthForm = modelMapper.map(patientHealthFormDto, PatientHealthForm.class);
		patientHealthForm.setDate(LocalDate.parse(patientHealthFormDto.getDate(), DateTimeFormatter.ofPattern("MM/dd/yyyy")));
		patientHealthForm.setTime(LocalTime.parse(patientHealthFormDto.getTime(), DateTimeFormatter.ofPattern("HH:mm")));
		
		patientHealthForm.setPatient(patientConverter.convertPatientToEntity(patientHealthFormDto.getPatient()));
				
		return patientHealthForm;
	}
}
