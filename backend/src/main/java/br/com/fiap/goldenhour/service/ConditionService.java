package br.com.fiap.goldenhour.service;

import java.util.List;

import br.com.fiap.goldenhour.dao.bean.Condition;

public interface ConditionService {
	public Condition getCondition(Long id);
	public List<Condition> getAllConditions();
}
