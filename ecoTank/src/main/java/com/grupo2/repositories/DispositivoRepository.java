package com.grupo2.repositories;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo2.models.Dispositivo;

@Repository
public interface DispositivoRepository extends JpaRepository<Dispositivo,Long>{
}