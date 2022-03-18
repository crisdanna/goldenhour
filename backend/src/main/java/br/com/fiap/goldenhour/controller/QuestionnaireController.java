package br.com.fiap.goldenhour.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.goldenhour.dao.bean.Questionnaire;
import br.com.fiap.goldenhour.dto.EmergencyScoreDto;
import br.com.fiap.goldenhour.dto.QuestionnaireDto;
import br.com.fiap.goldenhour.service.EmergencyScoreService;
import br.com.fiap.goldenhour.service.QuestionnaireService;
import br.com.fiap.goldenhour.util.PatientEntityDTOConverter;
import br.com.fiap.goldenhour.util.QuestionnaireItemEntityDTOConverter;
/**
 * This is the controller class for the emergency questionnaire
 * The services called here will manage the questionnaire and calculate the emergency score of the patient
 * @author cristiane
 *
 */
@RestController
@RequestMapping("questionnaire")
public class QuestionnaireController {
	private static transient Logger logger = LoggerFactory.getLogger(QuestionnaireController.class);
	
	@Autowired
	private QuestionnaireService service;
	
	@Autowired
	private EmergencyScoreService scoreService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PatientEntityDTOConverter patientConverter;
	
	@Autowired
	private QuestionnaireItemEntityDTOConverter questionnaireItemConverter;
	
	@PostMapping
	public QuestionnaireDto saveQuestionnaire(@RequestBody QuestionnaireDto questionnaire) {
		Questionnaire savedQuestionnaire = this.service.saveQuestionnaire(convertToEntity(questionnaire));
		return this.convertToDto(savedQuestionnaire);
	}
	
	@GetMapping("/{id}")
	public QuestionnaireDto getQuestionnaire(@PathVariable("id") Long id) {
		return convertToDto(this.service.getQuestionnaire(id));
	}
	
	@GetMapping("/list/{id}")
	public List<QuestionnaireDto> getQuestionnairesByPatient(@PathVariable("id") Long id) {
		return convertToDtoList(this.service.getQuestionnairesByPatientId(id));
	}
	
	@PostMapping("/score")
	public EmergencyScoreDto calculateScore(@RequestBody QuestionnaireDto questionnaire) {
		EmergencyScoreDto finalScore = new EmergencyScoreDto();
		scoreService.calculateEmergencyScore(convertToEntity(questionnaire));
		
		return finalScore;
	}
	
	private QuestionnaireDto convertToDto(Questionnaire questionnaire) {
		QuestionnaireDto questionnaireDto = modelMapper.map(questionnaire, QuestionnaireDto.class);
		questionnaireDto.setPatient(patientConverter.convertToDto(questionnaire.getPatient()));
		questionnaireDto.setDate(questionnaire.getDate().format(DateTimeFormatter.ofPattern("MM/dd/yyyy")));
		questionnaireDto.setItems(questionnaireItemConverter.convertToDtoList(questionnaire.getItems()));
		
	    return questionnaireDto;
	}
	
	private List<QuestionnaireDto> convertToDtoList(List<Questionnaire> questionnaires) {
		logger.info("Questionnaires to convert: {}", questionnaires.size());
		List<QuestionnaireDto> questionnairesList = new ArrayList<QuestionnaireDto>();
		questionnaires.forEach(questionnaire -> {
			questionnairesList.add(convertToDto(questionnaire));
		});
		
		return questionnairesList;
	}
	
	private Questionnaire convertToEntity(QuestionnaireDto questionnaireDto){
		Questionnaire questionnaire = modelMapper.map(questionnaireDto, Questionnaire.class);
		questionnaire.setDate(LocalDate.parse(questionnaireDto.getDate(), DateTimeFormatter.ofPattern("MM/dd/yyyy")));
		questionnaire.setTime(LocalTime.parse(questionnaireDto.getTime(), DateTimeFormatter.ofPattern("HH:mm")));
		
		questionnaire.setPatient(patientConverter.convertToEntity(questionnaireDto.getPatient()));
		questionnaire.setItems(questionnaireItemConverter.convertToEntityList(questionnaireDto.getItems()));
				
		return questionnaire;
	}
}
