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

import com.grupo2.models.Comentario;
import com.grupo2.services.ComentarioService;


@RestController
@RequestMapping("api/comentarios")
@CrossOrigin(origins="*" , methods = {RequestMethod.GET,RequestMethod.POST})
public class ComentarioRestController {

    @Autowired
    ComentarioService  comentarioService;
    @Autowired
    PlantaService plantaService;


    // Metodo que devuelva una lista de dispositivos
    @RequestMapping("/lista")
    public List<Comentario> mostrarListaComentarios(){

        return comentarioService.findAll();
    }

    // Metodo que devuelva un dispositivo unico por id
    @RequestMapping("/{id}")
    public Comentario mostrarComentario(@PathVariable("id") Long id){
        return comentarioService.findOne(id);
    }
    
    //CREAR 
    @PostMapping("/create/{id}")
    public ResponseEntity<Comentario> crearComentario(@PathVariable("id") Long id, @RequestBody Comentario comentario){
    	List<Comentario> comentarios = comentarioService.findAll();
    	comentarioService.setListaComentarios(comentarios);
    	System.out.println(comentario.getListaComentario());
    	Comentario comentarioAdd = comentarioService.add(comentario);
    	return new ResponseEntity<Comentario>(comentario, HttpStatus.CREATED);
    }
    
    //ELIMINAR DISPOSITVO
    @RequestMapping("/delete/{id}")
    public ResponseEntity<Comentario> eliminarComentario(@PathVariable("id") Long id){
    	comentarioService.delete(id);
    	return new ResponseEntity<Comentario>(HttpStatus.OK);
    }

}