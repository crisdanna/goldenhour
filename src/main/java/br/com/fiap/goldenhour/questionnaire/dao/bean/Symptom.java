package br.com.fiap.goldenhour.questionnaire.dao.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="symptom")
public class Symptom {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator = "symptom_id_seq")
	@SequenceGenerator(name = "symptom_id_seq", allocationSize = 1)
	private Long id;

	private String name;
	private String description;
	private String location;
	private String intensity;
	private String duration;
	private Long score;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getIntensity() {
		return intensity;
	}
	public void setIntensity(String intensity) {
		this.intensity = intensity;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public Long getScore() {
		return score;
	}
	public void setScore(Long score) {
		this.score = score;
	}
	public Long getId() {
		return id;
	}
	
	
}
