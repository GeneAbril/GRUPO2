package com.grupo2.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.grupo2.models.Usuario;
import com.grupo2.services.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class UsuarioRestController {

	@Autowired
	UsuarioService usuarioService;
	
	// REGISTRAR
	@PostMapping("/registrar")
	public ResponseEntity<Usuario> registrarUsuario(@RequestBody Usuario usuario){
		
		//FALTAN VALIDACIONES
		
		//usuarioService.registrarUsuario(usuario);
		
		boolean usuarioCreado = usuarioService.saveUsuario(usuario);
		if(!usuarioCreado) {
			return new ResponseEntity<Usuario>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
	}
	
	// LOGIN
	@PostMapping("/ingresar")
	public ResponseEntity<Usuario> loginUsuario(@RequestBody Usuario usuario){

		System.out.println(usuario.getCorreo());
		// validar si campos enviados estan vacios o son null
		if(usuario.getCorreo()==null || usuario.getClave() ==null ||  usuario.getCorreo().isEmpty() || usuario.getClave().isEmpty()) {
			return new ResponseEntity<Usuario>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		//VALIDAR USUARIO
		boolean usuarioValidado = usuarioService.validarUsuario(usuario.getCorreo(), usuario.getClave());
		if(usuarioValidado) {
			return new ResponseEntity<Usuario>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		Usuario usuarioValid = usuarioService.findByCorreo(usuario.getCorreo());
		return new ResponseEntity<Usuario>(usuarioValid,HttpStatus.OK);
	}
	
}
