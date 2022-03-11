package br.com.fiap.goldenhour.questionnaire.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.goldenhour.questionnaire.dao.bean.Symptom;

@Repository
public interface SymptomRepository extends CrudRepository<Symptom, Long> {
	public List<Symptom> findByName(String name);
}
