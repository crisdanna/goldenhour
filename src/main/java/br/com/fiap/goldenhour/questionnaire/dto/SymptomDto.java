package br.com.fiap.goldenhour.questionnaire.dto;

public class SymptomDto {

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
