package com.grupo2.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo2.models.Planta;
import com.grupo2.services.PlantaService;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/plantas")
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

    }

