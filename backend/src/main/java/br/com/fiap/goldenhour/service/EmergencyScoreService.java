package br.com.fiap.goldenhour.service;

import java.util.List;

import br.com.fiap.goldenhour.dao.bean.EmergencyScore;
import br.com.fiap.goldenhour.dao.bean.Questionnaire;

public interface EmergencyScoreService {
	public EmergencyScore calculateEmergencyScore(Questionnaire questionnaire);
	public List<EmergencyScore> getAllEmergencyScores();
}
