package br.com.fiap.goldenhour.util;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.fiap.goldenhour.dao.bean.SymptomDuration;
import br.com.fiap.goldenhour.dto.SymptomDurationDto;

@Component
public class SymptomDurationEntityDTOConverter {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public SymptomDurationDto convertToDto(SymptomDuration symptomDuration) {
		return modelMapper.map(symptomDuration, SymptomDurationDto.class);
	}
	
	public SymptomDuration convertToEntity(SymptomDurationDto symptomDurationDto){
		return modelMapper.map(symptomDurationDto, SymptomDuration.class);
	}
	
	public List<SymptomDurationDto> convertToDtoList(List<SymptomDuration> symptomDurationList) {
		List<SymptomDurationDto> durationsList = new ArrayList<SymptomDurationDto>();
		symptomDurationList.forEach(symptomDuration -> {
			durationsList.add(convertToDto(symptomDuration));
		});
		
		return durationsList;
	}
	
	public List<SymptomDuration> convertToEntityList(List<SymptomDurationDto> symptomDurationList) {
		List<SymptomDuration> durationsList = new ArrayList<SymptomDuration>();
		symptomDurationList.forEach(symptomDuration -> {
			durationsList.add(convertToEntity(symptomDuration));
		});
		
		return durationsList;
	}
}
