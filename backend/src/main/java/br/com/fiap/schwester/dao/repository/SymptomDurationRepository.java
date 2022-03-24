package br.com.fiap.schwester.dao.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.schwester.dao.bean.SymptomDuration;

@Repository
public interface SymptomDurationRepository extends CrudRepository<SymptomDuration, Long> {
}
