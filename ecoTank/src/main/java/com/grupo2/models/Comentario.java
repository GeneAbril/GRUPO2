package com.grupo2.models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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

//Many To One de comentarios a planta
@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="planta_id")
	private Planta planta;


//constructor vacio
public Comentario() {
}
//constructor con parametros
public Comentario(Long id, Date fecha) {
    this.id = id;
    this.fecha = fecha;
    
}
public void setId(Long id) {
    this.id = id;
}

public Date getFecha() {
    return fecha;
}
// inserta en el atributo la fecha antes de registrar en la base de datos
@PrePersist
protected void onCreate() {
    this.createdAt = new Date();
}

@PreUpdate
protected void onUpdate() {
    this.updatedAt = new Date();
}

}