package com.grupo2.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="comentarios")
public class Comentario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Se le asigna como Primary Key
    private Long id;

    //Variable Fecha | @DateTimeFormat: para dar el formato de la fecha
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date fecha;

    //Columnas de Fecha/tiempo
    @Column(updatable = false) // esta columna especifica nunca se va a actualizar atravez del sistema
    private Date createdAt;// Para saber en que momento fue insertada en la base de datos
    private Date updatedAt;// Para cuando se actualizo



}