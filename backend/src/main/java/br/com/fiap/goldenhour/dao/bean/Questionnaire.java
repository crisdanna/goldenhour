package br.com.fiap.goldenhour.dao.bean;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="questionnaire")
public class Questionnaire {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator = "questionnaire_id_seq")
	@SequenceGenerator(name = "questionnaire_id_seq", allocationSize = 1)
	private Long id;
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "patientId")
	private Patient patient;
	private LocalDate date;
	private LocalTime time;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<QuestionnaireItem> items;
	
	private Long finalScore;

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public List<QuestionnaireItem> getItems() {
		return items;
	}

	public void setItems(List<QuestionnaireItem> items) {
		this.items = items;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getFinalScore() {
		return finalScore;
	}

	public void setFinalScore(Long finalScore) {
		this.finalScore = finalScore;
	}
}
