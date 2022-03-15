package br.com.fiap.goldenhour.util;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.fiap.goldenhour.dao.bean.PainLocation;
import br.com.fiap.goldenhour.dto.PainLocationDto;

@Component
public class PainLocationEntityDTOConverter {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public PainLocationDto convertToDto(PainLocation painLocation) {
		return modelMapper.map(painLocation, PainLocationDto.class);
	}
	
	public PainLocation convertToEntity(PainLocationDto painLocationDto){
		return modelMapper.map(painLocationDto, PainLocation.class);
	}
	
	public List<PainLocationDto> convertToDtoList(List<PainLocation> painLocationList) {
		List<PainLocationDto> dtoList = new ArrayList<PainLocationDto>();
		painLocationList.forEach(painLocation -> {
			dtoList.add(convertToDto(painLocation));
		});
		
		return dtoList;
	}
}
