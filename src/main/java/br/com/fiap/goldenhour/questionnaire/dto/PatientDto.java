package br.com.fiap.goldenhour.questionnaire.dto;

public class PatientDto{
	private Long id;
	
	private String name;
	private String lastname;
	private String email;
	private String phone;
	private String birthDate;
	
	public Long getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}
		
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("**** PATIENT **** \n");
		sb.append("ID: ").append(this.getId()).append("\n");
		sb.append("Name: ").append(this.getName()).append("\n");
		sb.append("Last Name: ").append(this.getLastname()).append("\n");
				
		return sb.toString();
	}
}
