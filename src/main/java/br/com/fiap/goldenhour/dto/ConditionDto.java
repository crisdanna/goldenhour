package br.com.fiap.goldenhour.dto;

public class ConditionDto {

	private Long id;

	private String name;
	private String description;

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
