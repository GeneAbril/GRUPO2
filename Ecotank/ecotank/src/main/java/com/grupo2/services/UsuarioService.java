package com.grupo2.services;

import java.util.List;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.grupo2.modelos.Usuario;
import com.grupo2.repositories.UsuarioRepository;


@Service

public class UsuarioService {
    @Autowired // nombra inyeccion de dependencia, trae metodos de repositorio

    UsuarioRepository usuarioRepository; //llamar al repository

    public void saveUsuario(@Valid Usuario usuario) {
		usuarioRepository.save(usuario);
		
	}
  public List<Usuario> findAll() {
		return usuarioRepository.findAll();
		
	} 

}
