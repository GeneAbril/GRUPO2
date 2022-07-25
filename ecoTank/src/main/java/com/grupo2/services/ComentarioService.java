package com.grupo2.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo2.models.Comentario;
import com.grupo2.models.Dispositivo;
import com.grupo2.repositories.ComentarioRepository;


@Service
public class ComentarioService{

    @Autowired
    ComentarioRepository comentarioRepository;

    public List<Comentario> findAll() {

        return comentarioRepository.findAll();
    }

    // Metodo para enviar un dispositivo
    public Comentario findOne(Long id) {
        return comentarioRepository.findById(id).get();
    }

	public Comentario add(Dispositivo dispositivo) {
		// TODO Auto-generated method stub
		//return comentarioRepository.save(dispositivo);
		return null;
	}

	public void delete(Long id) {
		comentarioRepository.deleteById(id);
	}

}