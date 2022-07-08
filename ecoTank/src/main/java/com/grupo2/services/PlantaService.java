package com.grupo2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo2.models.Planta;
import com.grupo2.repositories.PlantaRepository;

@Service
public class PlantaService{
    @Autowired
    PlantaRepository plantaRepository;

    //Metodo para enviar lista de plantas
    public List<Planta> findAll() {
        return plantaRepository.findAll();
    }
    //Metodo para enviar una planta por id
    public Planta mostrarPlanta(Long id){
        return plantaRepository.findById(id).get();
    }

}
