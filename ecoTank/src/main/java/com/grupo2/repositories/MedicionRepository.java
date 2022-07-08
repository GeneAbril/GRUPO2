package com.grupo2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo2.models.Medicion;

@Repository
public interface MedicionRepository extends JpaRepository <Medicion, Long> {
    
}
