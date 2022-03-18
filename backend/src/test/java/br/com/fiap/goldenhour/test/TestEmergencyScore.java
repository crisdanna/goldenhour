package br.com.fiap.goldenhour.test;

import java.time.LocalDate;
import java.time.LocalTime;

import org.junit.jupiter.api.Test;

import br.com.fiap.goldenhour.dao.bean.EmergencyScore;
import br.com.fiap.goldenhour.dao.bean.Patient;
import br.com.fiap.goldenhour.dao.bean.Questionnaire;
import br.com.fiap.goldenhour.service.EmergencyScoreService;

class TestEmergencyScore {
	
	private EmergencyScoreService service;

	@Test
	void testHighRisk() {
		Questionnaire questionnaire = new Questionnaire();
		questionnaire.setDate(LocalDate.now());
		questionnaire.setTime(LocalTime.now());
		
		Patient patient = createPatient();
		questionnaire.setPatient(patient);
		
		EmergencyScore emergencyScore = service.calculateEmergencyScore(questionnaire);
	}

	void testMediumRisk() {
		
	}
	
	void testLowRisk() {
		
	}
	
	private Patient createPatient() {
		Patient patient = new Patient();
		patient.setId(1L);
		patient.setName("Charles");
		patient.setLastname("Dinkens");
		patient.setBirthDate(LocalDate.of(1970, 2, 6));
		
		return patient;
	}
}
