package br.com.fiap.goldenhour.service;

import java.util.List;

import br.com.fiap.goldenhour.dao.bean.Questionnaire;

public interface QuestionnaireService {
	public Questionnaire saveQuestionnaire(Questionnaire questionnaire);
	public Questionnaire getQuestionnaire(Long id);
	public void deleteQuestionnaire(Questionnaire questionnaire);
	public List<Questionnaire> getQuestionnairesByPatientId(Long patientId);
}
