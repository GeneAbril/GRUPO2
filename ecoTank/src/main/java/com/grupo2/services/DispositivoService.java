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

    // Metodo para enviar un dispositivo
    public Dispositivo findOne(Long id) {
        return dispositivoRepository.findById(id).get();
    }

	public Dispositivo add(Dispositivo dispositivo) {
		// TODO Auto-generated method stub
		return dispositivoRepository.save(dispositivo);
	}
}
