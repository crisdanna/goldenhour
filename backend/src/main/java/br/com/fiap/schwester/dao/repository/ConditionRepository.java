package br.com.fiap.schwester.dao.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.schwester.dao.bean.Condition;

@Repository
public interface ConditionRepository extends CrudRepository<Condition, Long> {
	public List<Condition> findByName(String name);
}
