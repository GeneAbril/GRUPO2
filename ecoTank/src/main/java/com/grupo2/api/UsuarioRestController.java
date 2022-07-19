package com.grupo2.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo2.models.Usuario;
import com.grupo2.services.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioRestController {
/*
	@Autowired
	UsuarioService usuarioService;
	
	@RequestMapping("/lista")
	public List<Usuario> mostrarListaUsuarios(){
		return usuarioService.findAll();
	}
	
	@RequestMapping("/{id}")
	public Usuario mostrarUsuario(@PathVariable("id") Long id) {
		return usuarioService.getOneUser(id);
	}
	*/
}
