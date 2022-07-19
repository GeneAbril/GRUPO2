package com.grupo2.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo2.models.Usuario;
import com.grupo2.services.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioRestController {

	@Autowired
	UsuarioService usuarioService;
	
	// REGISTRAR
	@PostMapping("/registrar")
	public ResponseEntity<Usuario> registrarUsuario(@RequestBody Usuario usuario){
		
		//FALTAN VALIDACIONES
		
		usuarioService.registrarUsuario(usuario);
		return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
	}
	
	// LOGIN
	@PostMapping("/ingresar")
	public ResponseEntity<Usuario> loginUsuario(@RequestBody String correo, 
			@RequestBody String clave){
		
		// validar si campos enviados estan vacios o son null
		if(correo==null || clave ==null ||  correo.isEmpty() || clave.isEmpty()) {
			return new ResponseEntity<Usuario>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		//VALIDAR USUARIO
		boolean usuarioValidado = true;
		
		return new ResponseEntity<Usuario>(HttpStatus.OK);
	}
	
}
