package br.com.fiap.goldenhour.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.goldenhour.dto.PainIntensityDto;
import br.com.fiap.goldenhour.dto.PainLocationDto;
import br.com.fiap.goldenhour.dto.SymptomDto;
import br.com.fiap.goldenhour.dto.SymptomDurationDto;
import br.com.fiap.goldenhour.service.SymptomService;
import br.com.fiap.goldenhour.util.PainIntensityEntityDTOConverter;
import br.com.fiap.goldenhour.util.PainLocationEntityDTOConverter;
import br.com.fiap.goldenhour.util.SymptomDurationEntityDTOConverter;
import br.com.fiap.goldenhour.util.SymptomEntityDTOConverter;

@RestController
@RequestMapping("symptom")
public class SymptomController {

	@Autowired
	private SymptomService service;
	
	@Autowired
	private SymptomEntityDTOConverter symptomConverter;
	
	@Autowired
	private SymptomDurationEntityDTOConverter symptomDurationConverter;
	
	@Autowired
	private PainLocationEntityDTOConverter painLocationConverter;
	
	@Autowired
	private PainIntensityEntityDTOConverter painIntensityConverter;
	
	@GetMapping("/{id}")
	public SymptomDto getSymptom(@PathVariable("id") Long id) {
		return symptomConverter.convertToDto(this.service.getSymptom(id));
	}
	
	@GetMapping("/name/{name}")
	public List<SymptomDto> getSymptomsByName(@PathVariable("name") String name) {
		return symptomConverter.convertToDtoList(this.service.getSymptomsByName(name));
	}
	
	@GetMapping("/list")
	public List<SymptomDto> getAllSymptoms() {
		return symptomConverter.convertToDtoList(this.service.getAllSymptoms());
	}
	
	@GetMapping("/duration/list")
	public List<SymptomDurationDto> getAllSymptomDurations() {
		return symptomDurationConverter.convertToDtoList(this.service.getAllSymptomDurations());
	}
	
	@GetMapping("/location/list")
	public List<PainLocationDto> getAllPainLocations() {
		return painLocationConverter.convertToDtoList(this.service.getAllPainLocations());
	}
	
	@GetMapping("/intensity/list")
	public List<PainIntensityDto> getAllPainIntensities() {
		return painIntensityConverter.convertToDtoList(this.service.getAllPainIntensities());
	}
}
