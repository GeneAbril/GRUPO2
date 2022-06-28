package com.grupo2.Api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo2.services.UsuarioService;

@RestController
@RequestMapping("/api")
public class UsuarioRestController {
    @Autowired
    UsuarioService usuarioService;


}
