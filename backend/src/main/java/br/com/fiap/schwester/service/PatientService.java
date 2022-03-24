package br.com.fiap.schwester.service;

import java.util.List;

import br.com.fiap.schwester.dao.bean.Patient;

public interface PatientService {
	public void savePatient(Patient patient);
	public Patient getPatient(Long id);
	public void deletePatient(Patient patient);
	public List<Patient> getAllPatients();
}
