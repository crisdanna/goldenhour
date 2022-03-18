package br.com.fiap.goldenhour.util;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.fiap.goldenhour.dao.bean.PainIntensity;
import br.com.fiap.goldenhour.dto.PainIntensityDto;

@Component
public class PainIntensityEntityDTOConverter {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public PainIntensityDto convertToDto(PainIntensity painIntensity) {
		return modelMapper.map(painIntensity, PainIntensityDto.class);
	}
	
	public PainIntensity convertToEntity(PainIntensityDto painIntensityDto){
		return modelMapper.map(painIntensityDto, PainIntensity.class);
	}
	
	public List<PainIntensityDto> convertToDtoList(List<PainIntensity> painIntensityList) {
		List<PainIntensityDto> dtoList = new ArrayList<PainIntensityDto>();
		painIntensityList.forEach(painIntensity -> {
			dtoList.add(convertToDto(painIntensity));
		});
		
		return dtoList;
	}
	
	public List<PainIntensity> convertToEntityList(List<PainIntensityDto> painIntensityList) {
		List<PainIntensity> entityList = new ArrayList<PainIntensity>();
		painIntensityList.forEach(painIntensity -> {
			entityList.add(convertToEntity(painIntensity));
		});
		
		return entityList;
	}
}
