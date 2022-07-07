package com.grupo2.api;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.grupo2.models.Dispositivo;
import com.grupo2.services.DispositivoService;

@RestController
@RequestMapping("/api")
public class DispositivoRestController {
    
    // Injeccion de dependencias
    @Autowired
    DispositivoService  dispositivoService;


    // Metodo que devuelva una lista de dispositivos
    @RequestMapping("/dispositivos")
    public List<Dispositivo> mostrarDispositivos(){

        return dispositivoService.findAll();
    }

    // Metodo que devuelva lista de plantas asociadas a dispositivos



}
