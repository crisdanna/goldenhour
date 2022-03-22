package br.com.fiap.goldenhour.test;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import br.com.fiap.goldenhour.dao.bean.PainIntensity;
import br.com.fiap.goldenhour.dao.bean.PainLocation;
import br.com.fiap.goldenhour.dao.bean.Symptom;
import br.com.fiap.goldenhour.dao.bean.SymptomDuration;
import br.com.fiap.goldenhour.dao.repository.PainIntensityRepository;
import br.com.fiap.goldenhour.dao.repository.PainLocationRepository;
import br.com.fiap.goldenhour.dao.repository.SymptomDurationRepository;
import br.com.fiap.goldenhour.dao.repository.SymptomRepository;
import br.com.fiap.goldenhour.service.SymptomService;
import br.com.fiap.goldenhour.service.SymptomServiceImpl;

@ExtendWith(MockitoExtension.class)//JUnit 5
class TestSymptomService {
	
	@InjectMocks
	private SymptomService service = new SymptomServiceImpl();
	
	@Mock
	private SymptomRepository symptomRepository;
	
	@Mock
	private SymptomDurationRepository symptomDurationRepository;
	
	@Mock
	private PainLocationRepository painLocationRepository;
	
	@Mock
	private PainIntensityRepository painIntensityRepository;

	@Test
	void testGetSymptomDuration() {
		
		Mockito.when(symptomDurationRepository.findAll()).thenReturn(this.getAllSymptomDurations());
		
		List<SymptomDuration> list = service.getAllSymptomDurations();
		Assert.assertNotNull(list);
		Assert.assertFalse(list.isEmpty());
	}
	
	@Test
	void testGetPainLocations() {
		
		Mockito.when(painLocationRepository.findAll()).thenReturn(this.getAllPainLocations());
		
		List<PainLocation> list = service.getAllPainLocations();
		Assert.assertNotNull(list);
		Assert.assertFalse(list.isEmpty());
	}
	
	@Test
	void testGetPainIntensities() {
		
		Mockito.when(painIntensityRepository.findAll()).thenReturn(this.getAllPainIntensities());
		
		List<PainIntensity> list = service.getAllPainIntensities();
		Assert.assertNotNull(list);
		Assert.assertFalse(list.isEmpty());
	}
	
	@Test
	void testGetSymptoms() {
		
		Mockito.when(symptomRepository.findAll()).thenReturn(this.getAllSymptoms());
		
		List<Symptom> list = service.getAllSymptoms();
		Assert.assertNotNull(list);
		Assert.assertFalse(list.isEmpty());
	}
	
	@Test
	void testGetSymptomById() {
		
		Mockito.when(symptomRepository.findById(1L)).thenReturn(Optional.of(this.getAllSymptoms().get(0)));
		
		Symptom symptom = service.getSymptom(1L);
		Assert.assertNotNull(symptom);
		Assert.assertEquals("Dor", symptom.getName());
	}
	
	private List<SymptomDuration> getAllSymptomDurations(){
		List<SymptomDuration> list = new ArrayList<>();
		
		SymptomDuration sd1 = new SymptomDuration();
		sd1.setId(1L);
		sd1.setName("5 a 20");
		sd1.setDescription("Sintoma dura de 5 a 20 minutos");
		sd1.setBottomIntervalInMinutes(5);
		sd1.setTopIntervalInMinutes(20);
		list.add(sd1);
		
		SymptomDuration sd2 = new SymptomDuration();
		sd2.setId(1L);
		sd2.setName("20 a 30");
		sd2.setDescription("Sintoma dura de 20 a 30 minutos");
		sd2.setBottomIntervalInMinutes(20);
		sd2.setTopIntervalInMinutes(30);
		list.add(sd2);
		
		return list;
	}
	
	private List<PainLocation> getAllPainLocations(){
		List<PainLocation> list = new ArrayList<>();
		
		PainLocation pl1 = new PainLocation();
		pl1.setId(1L);
		pl1.setName("Cabeça");
		pl1.setDescription("Região da cabeça e pescoço");
		pl1.setScore(1L);
		list.add(pl1);
		
		PainLocation pl2 = new PainLocation();
		pl2.setId(2L);
		pl2.setName("Tórax");
		pl2.setDescription("Região do peito até o quadril");
		pl2.setScore(2L);
		list.add(pl2);
		
		PainLocation pl3 = new PainLocation();
		pl3.setId(3L);
		pl3.setName("Pernas");
		pl3.setDescription("Uma ou as duas pernas");
		pl3.setScore(1L);
		list.add(pl3);
		
		return list;
	}
	
	private List<PainIntensity> getAllPainIntensities(){
		List<PainIntensity> list = new ArrayList<>();
		
		PainIntensity pi1 = new PainIntensity();
		pi1.setId(1L);
		pi1.setName("Baixa");
		pi1.setDescription("Baixa intensidade");
		pi1.setScore(0L);
		list.add(pi1);
		
		PainIntensity pi2 = new PainIntensity();
		pi2.setId(2L);
		pi2.setName("Média");
		pi2.setDescription("Média intensidade");
		pi2.setScore(1L);
		list.add(pi2);
		
		PainIntensity pi3 = new PainIntensity();
		pi3.setId(3L);
		pi3.setName("Alta");
		pi3.setDescription("Alta intensidade");
		pi3.setScore(2L);
		list.add(pi3);
		
		return list;
	}
	
	private List<Symptom> getAllSymptoms(){
		List<Symptom> list = new ArrayList<>();
		
		Symptom s = new Symptom();
		s.setId(1L);
		s.setName("Dor");
		s.setDescription("Dor");
		s.setDurations(getAllSymptomDurations());
		s.setLocations(getAllPainLocations());
		s.setIntensities(getAllPainIntensities());
		s.setScore(2L);
		list.add(s);
		
		return list;
	}
}
