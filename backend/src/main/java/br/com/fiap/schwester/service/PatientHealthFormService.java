package br.com.fiap.schwester.service;

import br.com.fiap.schwester.dao.bean.PatientHealthForm;

public interface PatientHealthFormService {
	public PatientHealthForm savePatientHealthForm(PatientHealthForm patientHealth);
	public PatientHealthForm getPatientHealthForm(Long id);
	public void deletePatientHealthForm(PatientHealthForm patientHealthForm);
	public PatientHealthForm getPatientHealthFormByPatientId(Long patientId);
}
