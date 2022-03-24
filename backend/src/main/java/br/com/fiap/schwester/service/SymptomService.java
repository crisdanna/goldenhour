package br.com.fiap.schwester.service;

import java.util.List;

import br.com.fiap.schwester.dao.bean.PainIntensity;
import br.com.fiap.schwester.dao.bean.PainLocation;
import br.com.fiap.schwester.dao.bean.Symptom;
import br.com.fiap.schwester.dao.bean.SymptomDuration;

public interface SymptomService {
	public Symptom getSymptom(Long id);
	public List<Symptom> getSymptomsByName(String name);
	public List<Symptom> getAllSymptoms();
	public List<SymptomDuration> getAllSymptomDurations();
	public List<PainLocation> getAllPainLocations();
	public List<PainIntensity> getAllPainIntensities();
}
