package com.grupo2.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo2.models.Medicion;
import com.grupo2.services.MedicionService;

@RestController
@RequestMapping("api/mediciones")
public class MedicionRestController {

        // Injeccion de dependencias
        @Autowired
        MedicionService medicionService;

        // Metodo que devuelva una lista de mediciones
        @RequestMapping("/lista")
        public List<Medicion> mostrarListaMediciones() {

            return medicionService.findAll();
        }

        // Metodo que devuelva una pla unica por id
        @RequestMapping("/{id}")
        public Medicion mostrarMedicion(@PathVariable("id")Long id) {
            return medicionService.mostrarMedicion(id);
        }

        
        
}
