package br.com.fiap.goldenhour.questionnaire.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fiap.goldenhour.questionnaire.dao.bean.PatientHealthForm;
import br.com.fiap.goldenhour.questionnaire.dao.repository.PatientHealthFormRepository;

@Service
public class PatientHealthFormServiceImpl implements PatientHealthFormService {
	
	@Autowired
	private PatientHealthFormRepository repository;

	@Override
	public PatientHealthForm savePatientHealthForm(PatientHealthForm patientHealthForm) {
		PatientHealthForm savedPatientHealthForm = this.repository.save(patientHealthForm);
		return savedPatientHealthForm;
	}

	@Override
	public PatientHealthForm getPatientHealthForm(Long id) {
		return this.repository.findById(id).get();
	}

	@Override
	public void deletePatientHealthForm(PatientHealthForm patientHealthForm) {
		this.repository.delete(patientHealthForm);
	}

	@Override
	public PatientHealthForm getPatientHealthFormByPatientId(Long patientId) {
		return this.repository.findByPatientId(patientId);
	}

}
