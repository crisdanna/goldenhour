package br.com.fiap.schwester.util;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.fiap.schwester.dao.bean.QuestionnaireItem;
import br.com.fiap.schwester.dto.QuestionnaireItemDto;

@Component
public class QuestionnaireItemEntityDTOConverter {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public QuestionnaireItemDto convertToDto(QuestionnaireItem questionnaireItem) {
		return modelMapper.map(questionnaireItem, QuestionnaireItemDto.class);
	}
	
	public QuestionnaireItem convertToEntity(QuestionnaireItemDto questionnaireItemDto){
		return modelMapper.map(questionnaireItemDto, QuestionnaireItem.class);
	}
	
	public List<QuestionnaireItemDto> convertToDtoList(List<QuestionnaireItem> questionnaireItems) {
		List<QuestionnaireItemDto> list = new ArrayList<>();
		questionnaireItems.forEach(questionnaireItem -> {
			list.add(convertToDto(questionnaireItem));
		});
		
		return list;
	}
	
	public List<QuestionnaireItem> convertToEntityList(List<QuestionnaireItemDto> questionnaireItems) {
		List<QuestionnaireItem> list = new ArrayList<>();
		questionnaireItems.forEach(questionnaireItem -> {
			list.add(convertToEntity(questionnaireItem));
		});
		
		return list;
	}
}
