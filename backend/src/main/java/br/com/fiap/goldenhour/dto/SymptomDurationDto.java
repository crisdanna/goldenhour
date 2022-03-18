package br.com.fiap.goldenhour.dto;

public class SymptomDurationDto {
	private Long id;

	private String name;
	private String description;
	private Integer topIntervalInMinutes;
	private Integer bottomIntervalInMinutes;
	private String isConstant;
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
	public String getIsConstant() {
		return isConstant;
	}
	public void setIsConstant(String isConstant) {
		this.isConstant = isConstant;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Integer getTopIntervalInMinutes() {
		return topIntervalInMinutes;
	}
	public void setTopIntervalInMinutes(Integer topIntervalInMinutes) {
		this.topIntervalInMinutes = topIntervalInMinutes;
	}
	public Integer getBottomIntervalInMinutes() {
		return bottomIntervalInMinutes;
	}
	public void setBottomIntervalInMinutes(Integer bottomIntervalInMinutes) {
		this.bottomIntervalInMinutes = bottomIntervalInMinutes;
	}
	public Long getScore() {
		return score;
	}
	public void setScore(Long score) {
		this.score = score;
	}
	
}
