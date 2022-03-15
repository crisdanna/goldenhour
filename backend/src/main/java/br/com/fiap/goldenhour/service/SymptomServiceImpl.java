package br.com.fiap.goldenhour.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fiap.goldenhour.dao.bean.PainIntensity;
import br.com.fiap.goldenhour.dao.bean.PainLocation;
import br.com.fiap.goldenhour.dao.bean.Symptom;
import br.com.fiap.goldenhour.dao.bean.SymptomDuration;
import br.com.fiap.goldenhour.dao.repository.PainIntensityRepository;
import br.com.fiap.goldenhour.dao.repository.PainLocationRepository;
import br.com.fiap.goldenhour.dao.repository.SymptomDurationRepository;
import br.com.fiap.goldenhour.dao.repository.SymptomRepository;

@Service
public class SymptomServiceImpl implements SymptomService {
	
	@Autowired
	private SymptomRepository symptomRepository;
	
	@Autowired
	private SymptomDurationRepository symptomDurationRepository;
	
	@Autowired
	private PainLocationRepository painLocationRepository;
	
	@Autowired
	private PainIntensityRepository painIntensityRepository;

	@Override
	public Symptom getSymptom(Long id) {
		return symptomRepository.findById(id).get();
	}

	@Override
	public List<Symptom> getAllSymptoms() {
		return (List<Symptom>) this.symptomRepository.findAll();
	}

	@Override
	public List<SymptomDuration> getAllSymptomDurations() {
		return (List<SymptomDuration>) this.symptomDurationRepository.findAll();
	}

	@Override
	public List<PainLocation> getAllPainLocations() {
		return (List<PainLocation>) this.painLocationRepository.findAll();
	}

	@Override
	public List<PainIntensity> getAllPainIntensities() {
		return (List<PainIntensity>) this.painIntensityRepository.findAll();
	}

}
