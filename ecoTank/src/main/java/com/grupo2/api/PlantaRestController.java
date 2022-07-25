package com.grupo2.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.grupo2.models.Planta;
import com.grupo2.services.PlantaService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/plantas")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})			
public class PlantaRestController {

        // Injeccion de dependencias
        @Autowired
        PlantaService plantaService;

        // Metodo que devuelva una lista de plantas
        @RequestMapping("/lista")
        public List<Planta> mostrarListaPlantas() {

            return plantaService.findAll();
        }

        // Metodo que devuelva una planta unica por id
        @RequestMapping("/{id}")
        public Planta mostrarPlanta(@PathVariable("id") Long id) {
            return plantaService.mostrarPlanta(id);
        }

@PostMapping("")
public ResponseEntity<Planta> savePlanta( @RequestBody Planta planta){
	Planta savePlanta = plantaService.SavePlanta(planta);
return new ResponseEntity <Planta> (savePlanta, HttpStatus.CREATED);
}


    }

