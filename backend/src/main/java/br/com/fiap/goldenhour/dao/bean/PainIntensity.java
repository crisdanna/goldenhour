package br.com.fiap.goldenhour.dao.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="pain_intensity")
public class PainIntensity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator = "pain_intensity_id_seq")
	@SequenceGenerator(name = "pain_intensity_id_seq", allocationSize = 1)
	private Long id;

	private String name;
	private String description;
	private Integer topRange;
	private Integer bottomRange;
	
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
	public Integer getTopRange() {
		return topRange;
	}
	public void setTopRange(Integer topRange) {
		this.topRange = topRange;
	}
	public Integer getBottomRange() {
		return bottomRange;
	}
	public void setBottomRange(Integer bottomRange) {
		this.bottomRange = bottomRange;
	}
}
