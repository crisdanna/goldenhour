package br.com.fiap.goldenhour.dao.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.goldenhour.dao.bean.SymptomDuration;

@Repository
public interface SymptomDurationRepository extends CrudRepository<SymptomDuration, Long> {
}
