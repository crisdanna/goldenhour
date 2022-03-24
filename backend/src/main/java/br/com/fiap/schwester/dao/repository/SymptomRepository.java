package br.com.fiap.schwester.dao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.schwester.dao.bean.Symptom;

@Repository
public interface SymptomRepository extends CrudRepository<Symptom, Long> {
	
	@Query("select a from Symptom a where lower(a.name) like lower(?1)")
	public List<Symptom> findByName(String name);
}
