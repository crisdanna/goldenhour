package br.com.fiap.goldenhour.dao.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="symptom_duration")
public class SymptomDuration {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator = "symptom_duration_id_seq")
	@SequenceGenerator(name = "symptom_duration_id_seq", allocationSize = 1)
	private Long id;

	private String name;
	private String description;
	private Integer topIntervalInMinutes;
	private Integer bottomIntervalInMinutes;
	private String isConstant;
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
}
