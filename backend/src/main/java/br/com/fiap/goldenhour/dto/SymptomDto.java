package br.com.fiap.goldenhour.dto;

public class SymptomDto {

	private Long id;

	private String name;
	private String description;
	private PainLocationDto location;
	private PainIntensityDto intensity;
	private SymptomDurationDto duration;
	private Long score;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
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
	public PainLocationDto getLocation() {
		return location;
	}
	public void setLocation(PainLocationDto location) {
		this.location = location;
	}
	public PainIntensityDto getIntensity() {
		return intensity;
	}
	public void setIntensity(PainIntensityDto intensity) {
		this.intensity = intensity;
	}
	public SymptomDurationDto getDuration() {
		return duration;
	}
	public void setDuration(SymptomDurationDto duration) {
		this.duration = duration;
	}
	public Long getScore() {
		return score;
	}
	public void setScore(Long score) {
		this.score = score;
	}
}
