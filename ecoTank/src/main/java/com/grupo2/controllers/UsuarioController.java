package com.grupo2.controllers;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.grupo2.models.Usuario;
import com.grupo2.services.UsuarioService;

@Controller
@RequestMapping("/usuario") // asiganamos ruta predeterminada
public class UsuarioController {
	// inyeccion de dependencia
		@Autowired
		UsuarioService usuarioService;
		
		// Ruta para desplegar jsp
		@RequestMapping("")
		// Pasando un objeto vacio
		public String inicio(@ModelAttribute("usuario") Usuario usuario) {
			// Pasamos el objeto usuario vacio
			return "registroUsuario.jsp"; // pagina a desplegar

		}
		
		@PostMapping("/guardar")
		//@ModelAttribute para pasar un objeto entero
		//@Moldel model mas amplio permite pasar lo que queramos
		public String guardarUsuario(@Valid @ModelAttribute("usuario") Usuario usuario,
				BindingResult resultado, 
				Model model) {

			if (resultado.hasErrors()) {// capturando si existe un error en el ingreso de datos desde el jsp
				// Enviar atributo al jsp para que muestre que hay un error
				model.addAttribute("msgError", "Debe realizar ingreso correcto de datos");
				return "registroUsuario.jsp";
			}

			// enviar el objeto al service
			boolean usuarioCreado = usuarioService.saveUsuario(usuario);

			if(usuarioCreado)
			{
				model.addAttribute("msgError", "Email ya existe");
				return "registroUsuario.jsp";
			}
			
			//En caso de que el registro haya sido exito
			return "registroExitoso.jsp"; // pagina a desplegar
		}

	// RUTA LOGIN
	@RequestMapping("/login")
	public String login() {
		return "login.jsp";
	}

	// RUTA VALIDAR LOGIN
	@PostMapping("/login")
	public String validarLogin(@RequestParam(value="correo")String correo, @RequestParam(value="clave") String clave, Model model){
	// validar si campos enviados estan vacios o son null
		if(correo==null || clave ==null ||  correo.isEmpty() || clave.isEmpty()) {
			model.addAttribute("msgError", "Todos los campos son obligatorios");
			return "login.jsp";
		}
		
		// Validaciones: 
		// Si email no coincide = true
		// Si clave no coincide = true
		// Si clave y email coinciden = false
		boolean usuarioValidado = usuarioService.validarUsuario(correo,clave);

		if(usuarioValidado){
			model.addAttribute("msgError", "Error en el ingreso al sistema");
			return "login.jsp";
		}else {
			//no hay error, puede ingresar al sistema
			// session.setAttribute("correo", correo);
			
		return "home.jsp";
		}
	}
}