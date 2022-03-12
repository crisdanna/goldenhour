package br.com.fiap.goldenhour.util;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.fiap.goldenhour.dao.bean.Address;
import br.com.fiap.goldenhour.dao.bean.Patient;
import br.com.fiap.goldenhour.dto.AddressDto;
import br.com.fiap.goldenhour.dto.PatientDto;

@Component
public class PatientEntityDTOConverter {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public PatientDto convertToDto(Patient patient) {
		PatientDto patientDto = modelMapper.map(patient, PatientDto.class);
		patientDto.setBirthDate(patient.getBirthDate().format(DateTimeFormatter.ofPattern("MM/dd/yyyy")));
		return patientDto;
	}
	
	public Patient convertToEntity(PatientDto patientDto){
		Patient patient = modelMapper.map(patientDto, Patient.class);
		patient.setBirthDate(LocalDate.parse(patientDto.getBirthDate(), DateTimeFormatter.ofPattern("MM/dd/yyyy")));
		
		patientDto.getAddresses().forEach(address -> patient.getAddresses().add(convertAddressToEntity(address)));
		 
		return patient;
	}
	
	private Address convertAddressToEntity(AddressDto addressDto) {
		return modelMapper.map(addressDto, Address.class);
	}
}
