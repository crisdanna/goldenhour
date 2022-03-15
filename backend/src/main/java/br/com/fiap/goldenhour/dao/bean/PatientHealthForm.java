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
@Table(name="patient_health")
public class PatientHealthForm {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator = "patient_health_id_seq")
	@SequenceGenerator(name = "patient_health_id_seq", allocationSize = 1)
	private Long id;
	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "patientId")
	private Patient patient;
	private Integer age;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Condition> conditions;
	
	private LocalDate date;
	private LocalTime time;
	
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public List<Condition> getConditions() {
		return conditions;
	}
	public void setConditions(List<Condition> conditions) {
		this.conditions = conditions;
	}
}
