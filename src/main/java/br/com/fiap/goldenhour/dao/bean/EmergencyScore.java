package br.com.fiap.goldenhour.dao.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="emergency_score")
public class EmergencyScore {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator = "emergency_score_id_seq")
	@SequenceGenerator(name = "emergency_score_id_seq", allocationSize = 1)
	private Long id;

	private String name;
	private String description;
	private Long minScore;
	private Long maxScore;

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

	public Long getId() {
		return id;
	}

	public Long getMinScore() {
		return minScore;
	}

	public void setMinScore(Long minScore) {
		this.minScore = minScore;
	}

	public Long getMaxScore() {
		return maxScore;
	}

	public void setMaxScore(Long maxScore) {
		this.maxScore = maxScore;
	}
	
}
