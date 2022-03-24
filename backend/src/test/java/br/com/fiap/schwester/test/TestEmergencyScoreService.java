package br.com.fiap.schwester.test;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import br.com.fiap.schwester.dao.bean.EmergencyScore;
import br.com.fiap.schwester.dao.bean.Patient;
import br.com.fiap.schwester.dao.bean.PatientHealthForm;
import br.com.fiap.schwester.dao.bean.Questionnaire;
import br.com.fiap.schwester.dao.bean.QuestionnaireItem;
import br.com.fiap.schwester.dao.repository.EmergencyScoreRepository;
import br.com.fiap.schwester.service.EmergencyScoreService;
import br.com.fiap.schwester.service.EmergencyScoreServiceImpl;
import br.com.fiap.schwester.service.PatientHealthFormService;

@ExtendWith(MockitoExtension.class)//JUnit 5
class TestEmergencyScoreService {
	
	@InjectMocks
	private EmergencyScoreService service = new EmergencyScoreServiceImpl();
	
	@Mock
	private EmergencyScoreRepository repository;
	@Mock
	private PatientHealthFormService healthFormService;

	@Test
	void testHighRisk() {
		Questionnaire questionnaire = new Questionnaire();
		questionnaire.setDate(LocalDate.now());
		questionnaire.setTime(LocalTime.now());
		
		Patient patient = createPatient();
		questionnaire.setPatient(patient);
		
		questionnaire.setItems(getHighRiskItems());
		
		Mockito.when(healthFormService.getPatientHealthFormByPatientId(1L)).thenReturn(new PatientHealthForm());
		Mockito.when(repository.findAll()).thenReturn(this.getAllEmergencyScores());
		
		EmergencyScore emergencyScore = service.calculateEmergencyScore(questionnaire);
		Assert.assertEquals("High", emergencyScore.getName());
	}

	@Test
	void testMediumRisk() {
		Questionnaire questionnaire = new Questionnaire();
		questionnaire.setDate(LocalDate.now());
		questionnaire.setTime(LocalTime.now());
		
		Patient patient = createPatient();
		questionnaire.setPatient(patient);
		
		questionnaire.setItems(getMediumRiskItems());
		
		Mockito.when(healthFormService.getPatientHealthFormByPatientId(1L)).thenReturn(new PatientHealthForm());
		Mockito.when(repository.findAll()).thenReturn(this.getAllEmergencyScores());
		
		EmergencyScore emergencyScore = service.calculateEmergencyScore(questionnaire);
		Assert.assertEquals("Medium", emergencyScore.getName());
	}
	
	@Test
	void testLowRisk() {
		Questionnaire questionnaire = new Questionnaire();
		questionnaire.setDate(LocalDate.now());
		questionnaire.setTime(LocalTime.now());
		
		Patient patient = createPatient();
		questionnaire.setPatient(patient);
		
		questionnaire.setItems(getLowRiskItems());
		
		Mockito.when(healthFormService.getPatientHealthFormByPatientId(1L)).thenReturn(new PatientHealthForm());
		Mockito.when(repository.findAll()).thenReturn(this.getAllEmergencyScores());
		
		EmergencyScore emergencyScore = service.calculateEmergencyScore(questionnaire);
		Assert.assertEquals("Low", emergencyScore.getName());
	}
	
	private Patient createPatient() {
		Patient patient = new Patient();
		patient.setId(1L);
		patient.setName("Charles");
		patient.setLastname("Dinkens");
		patient.setBirthDate(LocalDate.of(1970, 2, 6));
		
		return patient;
	}
	
	private List<QuestionnaireItem> getLowRiskItems(){
		List<QuestionnaireItem> items = new ArrayList<>();
		
		QuestionnaireItem item1 = new QuestionnaireItem();
		item1.setSymptomScore(1L);
		item1.setLocationScore(1L);
		item1.setIntensityScore(2L);
		item1.setDurationScore(1L);
		items.add(item1);
		
		QuestionnaireItem item2 = new QuestionnaireItem();
		item2.setSymptomScore(2L);
		item2.setLocationScore(2L);
		item2.setIntensityScore(0L);
		item2.setDurationScore(1L);
		items.add(item2);
		
		return items;
	}
	
	private List<QuestionnaireItem> getMediumRiskItems(){
		List<QuestionnaireItem> items = getLowRiskItems();
		
		QuestionnaireItem item1 = new QuestionnaireItem();
		item1.setSymptomScore(3L);
		item1.setLocationScore(2L);
		item1.setIntensityScore(0L);
		item1.setDurationScore(1L);
		items.add(item1);
		
		return items;
	}
	
	private List<QuestionnaireItem> getHighRiskItems(){
		List<QuestionnaireItem> items = getMediumRiskItems();
		
		QuestionnaireItem item1 = new QuestionnaireItem();
		item1.setSymptomScore(2L);
		item1.setLocationScore(2L);
		item1.setIntensityScore(1L);
		item1.setDurationScore(1L);
		items.add(item1);
		
		return items;
	}
	
	private List<EmergencyScore> getAllEmergencyScores(){
		List<EmergencyScore> scores = new ArrayList<>();
		
		EmergencyScore lowScore = new EmergencyScore();
		lowScore.setName("Low");
		lowScore.setDescription("Low Risk");
		lowScore.setMinScore(0L);
		lowScore.setMaxScore(12L);
		scores.add(lowScore);
		
		EmergencyScore mediumScore = new EmergencyScore();
		mediumScore.setName("Medium");
		mediumScore.setDescription("Medium Risk");
		mediumScore.setMinScore(12L);
		mediumScore.setMaxScore(22L);
		scores.add(mediumScore);
		
		EmergencyScore highScore = new EmergencyScore();
		highScore.setName("High");
		highScore.setDescription("High Risk");
		highScore.setMinScore(22L);
		highScore.setMaxScore(100L);
		scores.add(highScore);
		
		return scores;
	}
}
