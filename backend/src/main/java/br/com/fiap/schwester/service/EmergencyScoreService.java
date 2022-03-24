package br.com.fiap.schwester.service;

import java.util.List;

import br.com.fiap.schwester.dao.bean.EmergencyScore;
import br.com.fiap.schwester.dao.bean.Questionnaire;

public interface EmergencyScoreService {
	public EmergencyScore calculateEmergencyScore(Questionnaire questionnaire);
	public List<EmergencyScore> getAllEmergencyScores();
}
