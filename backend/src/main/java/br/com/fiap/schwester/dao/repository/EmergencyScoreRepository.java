package br.com.fiap.schwester.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.schwester.dao.bean.EmergencyScore;

@Repository
public interface EmergencyScoreRepository extends CrudRepository<EmergencyScore, Long> {
	public List<EmergencyScore> findByName(String name);
}
