package com.grupo2.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AutoProxyRegistrar;
import org.springframework.stereotype.Service;

import com.grupo2.models.Usuario;
import com.grupo2.repositories.UsuarioRepository;


@Service
public class UsuarioService {
	@Autowired
	UsuarioRepository usuarioRepository;

	//Metodos
	
	//Metodo para registrar el usuario en la base de datos
	public void saveUsuario(@Valid Usuario usuario) {
		usuarioRepository.save(usuario);
		
	}
	
	//Metodo para listar los usarios ingresados
	public List<Usuario> findAll() {
		
		return usuarioRepository.findAll();
	}
	
	
	
	
}