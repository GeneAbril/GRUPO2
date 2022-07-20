package com.grupo2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo2.models.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {


	Usuario findByCorreo(String correo);
}
