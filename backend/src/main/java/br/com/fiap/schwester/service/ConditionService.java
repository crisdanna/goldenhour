package br.com.fiap.schwester.service;

import java.util.List;

import br.com.fiap.schwester.dao.bean.Condition;

public interface ConditionService {
	public Condition getCondition(Long id);
	public List<Condition> getAllConditions();
}
