package br.com.fiap.goldenhour.questionnaire.service;

import java.util.List;

import br.com.fiap.goldenhour.questionnaire.dao.bean.EmergencyScore;
import br.com.fiap.goldenhour.questionnaire.dao.bean.Questionnaire;

public interface EmergencyScoreService {
	public EmergencyScore calculateEmergencyScore(Questionnaire questionnaire);
	public List<EmergencyScore> getAllEmergencyScores();
}
