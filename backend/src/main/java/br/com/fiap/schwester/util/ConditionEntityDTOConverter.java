package br.com.fiap.schwester.util;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.fiap.schwester.dao.bean.Condition;
import br.com.fiap.schwester.dto.ConditionDto;

@Component
public class ConditionEntityDTOConverter {
	private static transient Logger logger = LoggerFactory.getLogger(ConditionEntityDTOConverter.class);
	
	@Autowired
	private ModelMapper modelMapper;
	
	public ConditionDto convertToDto(Condition condition) {
		return modelMapper.map(condition, ConditionDto.class);
	}
	
	public Condition convertToEntity(ConditionDto conditionDto){
		return modelMapper.map(conditionDto, Condition.class);
	}
	
	public List<ConditionDto> convertToDtoList(List<Condition> conditions) {
		logger.info("Conditions to convert: {}", conditions.size());
		List<ConditionDto> conditionsList = new ArrayList<ConditionDto>();
		conditions.forEach(condition -> {
			conditionsList.add(convertToDto(condition));
		});
		
		return conditionsList;
	}
	
	public List<Condition> convertToEntityList(List<ConditionDto> conditions) {
		logger.info("Conditions to convert: {}", conditions.size());
		List<Condition> conditionsList = new ArrayList<Condition>();
		conditions.forEach(condition -> {
			conditionsList.add(convertToEntity(condition));
		});
		
		return conditionsList;
	}
}
