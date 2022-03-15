package br.com.fiap.goldenhour.dto;

public class EmergencyScoreDto {
	private Long id;
	private Long score;
	private String scoreDescription;
	private String scoreLevel;
	
	public Long getScore() {
		return score;
	}
	public void setScore(Long score) {
		this.score = score;
	}
	public String getScoreDescription() {
		return scoreDescription;
	}
	public void setScoreDescription(String scoreDescription) {
		this.scoreDescription = scoreDescription;
	}
	public String getScoreLevel() {
		return scoreLevel;
	}
	public void setScoreLevel(String scoreLevel) {
		this.scoreLevel = scoreLevel;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
}
