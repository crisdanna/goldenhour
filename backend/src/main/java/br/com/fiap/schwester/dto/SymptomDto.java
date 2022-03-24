package br.com.fiap.schwester.dto;

import java.util.ArrayList;
import java.util.List;

public class SymptomDto {

	private Long id;
	private String name;
	private String description;
	private List<PainLocationDto> locations = new ArrayList<>();
	private List<PainIntensityDto> intensities = new ArrayList<>();
	private List<SymptomDurationDto> durations = new ArrayList<>();
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
	public List<PainLocationDto> getLocations() {
		return locations;
	}
	public void setLocations(List<PainLocationDto> locations) {
		this.locations = locations;
	}
	public List<PainIntensityDto> getIntensities() {
		return intensities;
	}
	public void setIntensities(List<PainIntensityDto> intensities) {
		this.intensities = intensities;
	}
	public List<SymptomDurationDto> getDurations() {
		return durations;
	}
	public void setDurations(List<SymptomDurationDto> durations) {
		this.durations = durations;
	}
	public Long getScore() {
		return score;
	}
	public void setScore(Long score) {
		this.score = score;
	}
}
