package br.com.fiap.schwester.dao.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.schwester.dao.bean.PatientHealthForm;

@Repository
public interface PatientHealthFormRepository extends CrudRepository<PatientHealthForm, Long> {
	
	@Query("select a from PatientHealthForm a where a.patient.id = ?1")
	public PatientHealthForm findByPatientId(Long id);
}
