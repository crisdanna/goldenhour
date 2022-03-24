package br.com.fiap.schwester.dao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.schwester.dao.bean.Questionnaire;

@Repository
public interface QuestionnaireRepository extends CrudRepository<Questionnaire, Long> {
	
	@Query("select a from Questionnaire a where a.patient.id = ?1")
	public List<Questionnaire> findByPatientId(Long id);
}
