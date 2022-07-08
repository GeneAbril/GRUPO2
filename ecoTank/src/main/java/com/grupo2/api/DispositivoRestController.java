package com.grupo2.api;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.grupo2.models.Dispositivo;
import com.grupo2.services.DispositivoService;

@RestController
@RequestMapping("/api/dispositivos")
public class DispositivoRestController {
    
    // Injeccion de dependencias
    @Autowired
    DispositivoService  dispositivoService;


    // Metodo que devuelva una lista de dispositivos
    @RequestMapping("/lista")
    public List<Dispositivo> mostrarListaDispositivos(){

        return dispositivoService.findAll();
    }

    // Metodo que devuelva un dispositivo unico por id
    @RequestMapping("/{id}")
    public Dispositivo mostrarDispositivo(@PathVariable("id") Long id){
        return dispositivoService.findOne(id);
    }

}
