package com.grupo2.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
			usuarioService.saveUsuario(usuario);

			// obtener una lista de autos
			List<Usuario> listaUsuarios = usuarioService.findAll();
			// Pasamos la lista de auto al jsp
			model.addAttribute("usuariosCapturados", listaUsuarios);

			return "registroExitoso.jsp"; // pagina a desplegar
		}
}
