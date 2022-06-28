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
import com.grupo2.modelos.Usuario;
import com.grupo2.services.UsuarioService;

@Controller
@RequestMapping("/usuario")
//En controller van las rutas 
public class UsuarioController {
	@Autowired
    UsuarioService usuarioService;
	Usuario usuario;
    //ruta --> http://localhost:8080/usuario/registrar
    @RequestMapping ("/registrar")//peticion get, pedir info y post enviar info

//siempre es public string

//es objeto usuario vacio
    public String PaginaRegistro(@ModelAttribute ("usuario") Usuario usuario ){//establecer request y despues metodo
 
        return "registro.jsp";
}

@PostMapping ("/guardar")
public String guardar(@Valid @ModelAttribute("usuario") Usuario usuario,
			BindingResult resultado,
			Model model) {  //model model pasa cualquier tipo de dato

                if (resultado.hasErrors()) {// capturando si existe un error en el ingreso de datos desde el jsp
				// Enviar atributo al jsp para que muestre que hay un error
                //atributte pasar modelo entero
				model.addAttribute("msgError", "Debe realizar ingreso correcto de datos");
				return "registro.jsp";
			}

			// enviar el objeto al service
			usuarioService.saveUsuario(usuario);

			// obtener una lista de autos
			List<Usuario> listaUsuarios = usuarioService.findAll();
			// Pasamos la lista de auto al jsp
			model.addAttribute("usuariosCapturados", listaUsuarios);

			return "registro.jsp"; // pagina a desplegar
		}
                
}
