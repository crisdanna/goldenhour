package br.com.fiap.goldenhour.dto;

import java.util.List;

public class QuestionnaireDto {

	private Long id;
	
	private PatientDto patient;
	private String date;
	private String time;
	
	private List<SymptomDto> symptoms;

	public PatientDto getPatient() {
		return patient;
	}

	public void setPatient(PatientDto patient) {
		this.patient = patient;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public List<SymptomDto> getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(List<SymptomDto> symptoms) {
		this.symptoms = symptoms;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
}
