package br.com.fiap.schwester.util;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.fiap.schwester.dao.bean.Symptom;
import br.com.fiap.schwester.dto.SymptomDto;

@Component
public class SymptomEntityDTOConverter {
	private static transient Logger logger = LoggerFactory.getLogger(SymptomEntityDTOConverter.class);
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PainLocationEntityDTOConverter painLocationConverter;
	
	@Autowired
	private PainIntensityEntityDTOConverter painIntensityConverter;
	
	@Autowired
	private SymptomDurationEntityDTOConverter symptomDurationConverter;
	
	public SymptomDto convertToDto(Symptom symptom) {
		SymptomDto symptomDto = modelMapper.map(symptom, SymptomDto.class);
		
		symptomDto.setDurations(symptomDurationConverter.convertToDtoList(symptom.getDurations()));
		symptomDto.setIntensities(painIntensityConverter.convertToDtoList(symptom.getIntensities()));
		symptomDto.setLocations(painLocationConverter.convertToDtoList(symptom.getLocations()));
		
		return symptomDto;
	}
	
	public Symptom convertToEntity(SymptomDto symptomDto){
		Symptom symptom = modelMapper.map(symptomDto, Symptom.class);
		
		symptom.setDurations(symptomDurationConverter.convertToEntityList(symptomDto.getDurations()));
		symptom.setIntensities(painIntensityConverter.convertToEntityList(symptomDto.getIntensities()));
		symptom.setLocations(painLocationConverter.convertToEntityList(symptomDto.getLocations()));
		
		return symptom;
	}
	
	public List<SymptomDto> convertToDtoList(List<Symptom> symptoms) {
		logger.info("Symptoms to convert: {}", symptoms.size());
		List<SymptomDto> symptomsList = new ArrayList<SymptomDto>();
		symptoms.forEach(symptom -> {
			symptomsList.add(convertToDto(symptom));
		});
		
		return symptomsList;
	}
}
