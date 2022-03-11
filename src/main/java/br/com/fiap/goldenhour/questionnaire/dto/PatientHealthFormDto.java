package br.com.fiap.goldenhour.questionnaire.dto;

import java.util.List;

public class PatientHealthFormDto {

	private Long id;
	
	private PatientDto patient;
	private Long age;

	private List<ConditionDto> conditions;
	
	private String date;
	private String time;
	
	public PatientDto getPatient() {
		return patient;
	}
	public void setPatient(PatientDto patient) {
		this.patient = patient;
	}
	public Long getAge() {
		return age;
	}
	public void setAge(Long age) {
		this.age = age;
	}
	
	public Long getId() {
		return id;
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
	public List<ConditionDto> getConditions() {
		return conditions;
	}
	public void setConditions(List<ConditionDto> conditions) {
		this.conditions = conditions;
	}
	
}
