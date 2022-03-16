package br.com.fiap.goldenhour.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fiap.goldenhour.dao.bean.Condition;
import br.com.fiap.goldenhour.dao.repository.ConditionRepository;

@Service
public class ConditionServiceImpl implements ConditionService {
	
	@Autowired
	private ConditionRepository conditionRepository;
	

	@Override
	public Condition getCondition(Long id) {
		return conditionRepository.findById(id).get();
	}

	@Override
	public List<Condition> getAllConditions() {
		return (List<Condition>) this.conditionRepository.findAll();
	}
}
