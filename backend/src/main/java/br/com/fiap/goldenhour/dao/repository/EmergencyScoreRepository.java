package br.com.fiap.goldenhour.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.goldenhour.dao.bean.EmergencyScore;

@Repository
public interface EmergencyScoreRepository extends CrudRepository<EmergencyScore, Long> {
	public List<EmergencyScore> findByName(String name);
}
