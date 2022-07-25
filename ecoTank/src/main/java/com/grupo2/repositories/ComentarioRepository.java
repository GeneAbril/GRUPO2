package com.grupo2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo2.models.Comentario;

@Repository
public interface ComentarioRepository extends JpaRepository <Comentario, Long> {


    
}
