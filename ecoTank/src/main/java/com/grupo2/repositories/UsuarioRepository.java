package com.grupo2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo2.models.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	/*Las interface solo definen los metodos*/
	/*Aqui nosotros ejecutamos las query y usar metodos que se conectan a la base de datos*/
	
}
