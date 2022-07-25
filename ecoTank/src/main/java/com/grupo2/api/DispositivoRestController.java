package com.grupo2.api;


import java.util.List;

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

import com.grupo2.models.Dispositivo;
import com.grupo2.models.Usuario;
import com.grupo2.services.DispositivoService;
import com.grupo2.services.UsuarioService;

@RestController
@RequestMapping("/api/dispositivos")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class DispositivoRestController {
    
    // Injeccion de dependencias
    @Autowired
    DispositivoService  dispositivoService;

    @Autowired
    UsuarioService usuarioService;

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
    
    //CREAR 
    @PostMapping("/create/{id}")
    public ResponseEntity<Dispositivo> crearDispositivo(@PathVariable("id") Long id, @RequestBody Dispositivo dispositivo){
    	List<Usuario> usuarios = usuarioService.findAll();
    	dispositivo.setListaUsuarios(usuarios);
    	System.out.println(dispositivo.getListaUsuarios());
    	Dispositivo dispositivoAdd = dispositivoService.add(dispositivo);
    	return new ResponseEntity(dispositivo, HttpStatus.CREATED);
    }
    
    //ELIMINAR DISPOSITVO
    @RequestMapping("/delete/{id}")
    public ResponseEntity<Dispositivo> eliminarDispositivo(@PathVariable("id") Long id){
    	dispositivoService.delete(id);
    	return new ResponseEntity(HttpStatus.OK);
    }

}
