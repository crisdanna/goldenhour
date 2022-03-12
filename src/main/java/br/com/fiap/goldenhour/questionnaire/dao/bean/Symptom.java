package br.com.fiap.goldenhour.questionnaire.dao.bean;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
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
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "locationId")
	private PainLocation location;
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "intensityId")
	private PainIntensity intensity;
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "durationId")
	private SymptomDuration duration;
	
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

	public PainLocation getLocation() {
		return location;
	}

	public void setLocation(PainLocation location) {
		this.location = location;
	}

	public PainIntensity getIntensity() {
		return intensity;
	}

	public void setIntensity(PainIntensity intensity) {
		this.intensity = intensity;
	}

	public SymptomDuration getDuration() {
		return duration;
	}

	public void setDuration(SymptomDuration duration) {
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
