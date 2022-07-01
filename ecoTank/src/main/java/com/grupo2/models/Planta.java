package com.grupo2.models;

import java.util.Date;
import javax.persistence.JoinColumn;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

@Entity
@Table(name="plantas")
public class Planta {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String nombre;
private Date fechaPlantacion;

@Column(updatable = false)
private Date createdAt;

private Date updatedAt;


//Many To One a Dispositivo
@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="dispositivo_id")
	private Dispositivo dispositivo;


//constructor vacio
public Planta() {
}

//constructor con parametros
public Planta(String nombre, Date fechaPlantacion, Dispositivo dispositivo) {
    this.nombre = nombre;
    this.fechaPlantacion = fechaPlantacion;
    this.dispositivo = dispositivo;
}


//getters and setters
public String getNombre() {
    return nombre;
}

public void setNombre(String nombre) {
    this.nombre = nombre;
}

public Date getFechaPlantacion() {
    return fechaPlantacion;
}

public void setFechaPlantacion(Date fechaPlantacion) {
    this.fechaPlantacion = fechaPlantacion;
}

public Dispositivo getDispositivo() {
    return dispositivo;
}

public void setDispositivo(Dispositivo dispositivo) {
    this.dispositivo = dispositivo;
}

@PrePersist
protected void onCreate(){
    this.createdAt = new Date();
}
@PreUpdate
protected void onUpdate(){
    this.updatedAt = new Date();
}
}