package br.com.fiap.goldenhour.dao.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.fiap.goldenhour.dao.bean.PainIntensity;

@Repository
public interface PainIntensityRepository extends CrudRepository<PainIntensity, Long> {
}
