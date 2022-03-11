package br.com.fiap.goldenhour.questionnaire.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fiap.goldenhour.questionnaire.dao.bean.EmergencyScore;
import br.com.fiap.goldenhour.questionnaire.dao.bean.PatientHealthForm;
import br.com.fiap.goldenhour.questionnaire.dao.bean.Questionnaire;
import br.com.fiap.goldenhour.questionnaire.dao.repository.EmergencyScoreRepository;

@Service
public class EmergencyScoreServiceImpl implements EmergencyScoreService {
	
	@Autowired
	PatientHealthFormService healthFormService;
	
	@Autowired
	EmergencyScoreRepository repository;

	@Override
	public EmergencyScore calculateEmergencyScore(Questionnaire questionnaire) {
			
		Long finalScore = questionnaire.getSymptoms().stream().mapToLong(symptom -> symptom.getScore()).sum();
		int patientAge = 0;
		
		PatientHealthForm patientHealthForm = healthFormService.getPatientHealthFormByPatientId(questionnaire.getPatient().getId());
		if(patientHealthForm != null) {
			finalScore += patientHealthForm.getConditions().stream().mapToLong(condition -> condition.getScore()).sum();
			patientAge = patientHealthForm.getAge();
		}else {
			LocalDate currentDate = LocalDate.now();
			patientAge = Period.between(questionnaire.getPatient().getBirthDate(), currentDate).getYears();
		}
		
		finalScore += scorePatientAge(patientAge);
		
		//get score range list
		List<EmergencyScore> scores = this.getAllEmergencyScores();
		for (EmergencyScore emergencyScore : scores) {
			if(finalScore >= emergencyScore.getMinScore() && finalScore < emergencyScore.getMaxScore()) {
				return emergencyScore;
			}
		}
		
		return new EmergencyScore();
	}
	
	@Override
	public List<EmergencyScore> getAllEmergencyScores() {
		return (List<EmergencyScore>) this.repository.findAll();
	}

	
	private Long scorePatientAge(int age) {
	    //According to REMS, the patient's age is scored as follows
	    if(age < 45) {
	    	return 0L;
	    } else if(age >= 45 && age <= 54) {
	    	return 2L;
	    }else if(age > 54 && age <= 64) {
	    	return 3L;
	    }else if(age > 64 && age <= 74) {
	    	return 5L;
	    }else {
	    	return 6L;
	    }
	}

}
