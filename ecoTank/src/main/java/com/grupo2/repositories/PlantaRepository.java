package com.grupo2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo2.models.Planta;

@Repository
public interface PlantaRepository extends JpaRepository<Planta, Long> {
    
}
