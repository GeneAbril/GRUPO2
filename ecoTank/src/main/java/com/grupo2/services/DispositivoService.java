package com.grupo2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo2.models.Dispositivo;
import com.grupo2.repositories.DispositivoRepository;

@Service
public class DispositivoService {
    @Autowired
    DispositivoRepository dispositivoRepository;

    // Metodo para enviar lista de dispositivo
    public List<Dispositivo> findAll() {

        return dispositivoRepository.findAll();
    }

    public Dispositivo findOne(Long id) {
        return dispositivoRepository.findById(id).get();
    }
}
