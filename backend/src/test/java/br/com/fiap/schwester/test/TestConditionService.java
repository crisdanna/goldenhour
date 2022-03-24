package br.com.fiap.schwester.test;

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

import br.com.fiap.schwester.dao.bean.Condition;
import br.com.fiap.schwester.dao.bean.PainIntensity;
import br.com.fiap.schwester.dao.bean.PainLocation;
import br.com.fiap.schwester.dao.bean.Symptom;
import br.com.fiap.schwester.dao.bean.SymptomDuration;
import br.com.fiap.schwester.dao.repository.ConditionRepository;
import br.com.fiap.schwester.service.ConditionService;
import br.com.fiap.schwester.service.ConditionServiceImpl;

@ExtendWith(MockitoExtension.class)//JUnit 5
class TestConditionService {
	
	@InjectMocks
	private ConditionService service = new ConditionServiceImpl();
	
	@Mock
	private ConditionRepository repository;
	

	@Test
	void testGetConditions() {
		
		Mockito.when(repository.findAll()).thenReturn(this.getAllConditions());
		
		List<Condition> list = service.getAllConditions();
		Assert.assertNotNull(list);
		Assert.assertFalse(list.isEmpty());
	}
	
	@Test
	void testGetConditionById() {
		
		Mockito.when(repository.findById(1L)).thenReturn(Optional.of(this.getAllConditions().get(0)));
		
		Condition condition = service.getCondition(1L);
		Assert.assertNotNull(condition);
		Assert.assertEquals("Hipertensão", condition.getName());
	}
	
	private List<Condition> getAllConditions(){
		List<Condition> list = new ArrayList<>();
		
		Condition c1 = new Condition();
		c1.setId(1L);
		c1.setName("Hipertensão");
		c1.setDescription("Hipertensão");
		c1.setScore(2L);
		list.add(c1);
		
		Condition c2 = new Condition();
		c2.setId(2L);
		c2.setName("Diabetes");
		c2.setDescription("Diabetes");
		c2.setScore(1L);
		list.add(c2);
		
		Condition c3 = new Condition();
		c3.setId(3L);
		c3.setName("Tabagismo");
		c3.setDescription("Tabagismo");
		c3.setScore(1L);
		list.add(c3);
		
		return list;
	}
}
