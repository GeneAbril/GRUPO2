package com.grupo2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo2.models.Medicion;
import com.grupo2.repositories.MedicionRepository;

@Service
public class MedicionService {
    @Autowired
    MedicionRepository medicionRepository;

    // Metodo para enviar lista de mediciones
    public List<Medicion> findAll() {
        return medicionRepository.findAll();
    }

	public Medicion mostrarMedicion(Long id) {
		return medicionRepository.findById(id).get();
	}

    
}
