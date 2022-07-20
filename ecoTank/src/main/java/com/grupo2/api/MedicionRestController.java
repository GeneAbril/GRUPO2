package com.grupo2.api;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.grupo2.models.Medicion;
import com.grupo2.services.MedicionService;

@RestController
@RequestMapping("api/mediciones")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
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

        @PostMapping("/create")
        public ResponseEntity<Medicion> recibirInfo(@Valid @RequestBody Medicion medicion){
        	Medicion medicionAdd = medicionService.add(medicion);
        	return new ResponseEntity(medicionAdd, HttpStatus.CREATED);	
        }
        
}
