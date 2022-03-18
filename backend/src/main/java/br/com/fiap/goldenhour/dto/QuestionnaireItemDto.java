package br.com.fiap.goldenhour.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="questionnaire_item")
public class QuestionnaireItemDto {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator = "questionnaire_item_id_seq")
	@SequenceGenerator(name = "questionnaire_item_id_seq", allocationSize = 1)
	private Long id;
	
	private Long symptomId;
	private Long symptomScore;
	private Long locationId;
	private Long locationScore;
	private Long intensityId;
	private Long intensityScore;
	private Long durationId;
	private Long durationScore;
	
	private String comments;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getSymptomId() {
		return symptomId;
	}

	public void setSymptomId(Long symptomId) {
		this.symptomId = symptomId;
	}

	public Long getSymptomScore() {
		return symptomScore;
	}

	public void setSymptomScore(Long symptomScore) {
		this.symptomScore = symptomScore;
	}

	public Long getLocationId() {
		return locationId;
	}

	public void setLocationId(Long locationId) {
		this.locationId = locationId;
	}

	public Long getLocationScore() {
		return locationScore;
	}

	public void setLocationScore(Long locationScore) {
		this.locationScore = locationScore;
	}

	public Long getIntensityId() {
		return intensityId;
	}

	public void setIntensityId(Long intensityId) {
		this.intensityId = intensityId;
	}

	public Long getIntensityScore() {
		return intensityScore;
	}

	public void setIntensityScore(Long intensityScore) {
		this.intensityScore = intensityScore;
	}

	public Long getDurationId() {
		return durationId;
	}

	public void setDurationId(Long durationId) {
		this.durationId = durationId;
	}

	public Long getDurationScore() {
		return durationScore;
	}

	public void setDurationScore(Long durationScore) {
		this.durationScore = durationScore;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}
}
