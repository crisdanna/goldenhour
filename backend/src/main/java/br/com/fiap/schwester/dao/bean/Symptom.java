package br.com.fiap.schwester.dao.bean;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
	
	@OneToMany(cascade = CascadeType.MERGE)
    private List<PainLocation> locations = new ArrayList<>();
	
	@OneToMany(cascade = CascadeType.MERGE)
    private List<PainIntensity> intensities = new ArrayList<>();
	
	@OneToMany(cascade = CascadeType.MERGE)
    private List<SymptomDuration> durations = new ArrayList<>();
	
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

	public List<PainLocation> getLocations() {
		return locations;
	}

	public void setLocations(List<PainLocation> locations) {
		this.locations = locations;
	}

	public List<PainIntensity> getIntensities() {
		return intensities;
	}

	public void setIntensities(List<PainIntensity> intensities) {
		this.intensities = intensities;
	}

	public List<SymptomDuration> getDurations() {
		return durations;
	}

	public void setDurations(List<SymptomDuration> durations) {
		this.durations = durations;
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

	public void setId(Long id) {
		this.id = id;
	}
	
}
