package br.com.fiap.goldenhour.questionnaire.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fiap.goldenhour.questionnaire.dao.bean.Questionnaire;
import br.com.fiap.goldenhour.questionnaire.dao.repository.QuestionnaireRepository;

@Service
public class QuestionnaireServiceImpl implements QuestionnaireService {
	
	@Autowired
	private QuestionnaireRepository repository;

	@Override
	public Questionnaire saveQuestionnaire(Questionnaire questionnaire) {
		Questionnaire savedQuestionnaire = this.repository.save(questionnaire);
		return savedQuestionnaire;
	}

	@Override
	public Questionnaire getQuestionnaire(Long id) {
		return this.repository.findById(id).get();
	}

	@Override
	public void deleteQuestionnaire(Questionnaire questionnaire) {
		this.repository.delete(questionnaire);
	}

	@Override
	public List<Questionnaire> getQuestionnairesByPatientId(Long patientId) {
		return (List<Questionnaire>) this.repository.findByPatientId(patientId);
	}

}
