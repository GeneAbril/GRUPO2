package com.grupo2.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="dispositivos")
public class Dispositivo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String arduino;
private Boolean temperatura;
private Boolean humedad;

@Column(updatable = false)
private Date createdAt;

private Date updatedAt;

//Many To Many a usuarios
@ManyToMany(fetch=FetchType.EAGER)
//creacion de tabla relacional
@JsonIgnoreProperties("listaDispositivos")
@JoinTable(name= "dispositivos_usuarios",
joinColumns = @JoinColumn(name="dispositivo_id"),//creacion de columnas
inverseJoinColumns= @JoinColumn(name="usuario_id")
)
private List <Usuario> listaUsuarios;

//Relacioens

//One To Many de dispositivo a Planta
@OneToMany(mappedBy ="dispositivo",cascade=CascadeType.ALL ,fetch=FetchType.LAZY)
private List<Planta> listaPlantas;

//One To Many de dispositivo a mediciones
@OneToMany(mappedBy ="dispositivo",cascade=CascadeType.ALL ,fetch=FetchType.LAZY)
private List<Medicion> listaMediciones;

	//constructor vacio
    public Dispositivo() {
    }

//constructor con parametros
    public Dispositivo(Long id, String nombre, String arduino, Boolean temperatura, Boolean humedad, List<Usuario> listaUsuarios) {
        this.id = id;
    	this.nombre = nombre;
    	this.arduino = arduino;
        this.temperatura = temperatura;
        this.humedad = humedad;
        this.listaUsuarios = listaUsuarios;
    }

    //getters and setters
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public String getArduino() {
        return arduino;
    }

    public void setArduino(String arduino) {
        this.arduino = arduino;
    }

    public Boolean getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(Boolean temperatura) {
        this.temperatura = temperatura;
    }

    public Boolean getHumedad() {
        return humedad;
    }

    public void setHumedad(Boolean humedad) {
        this.humedad = humedad;
    }

    public List<Usuario> getListaUsuarios() {
        return listaUsuarios;
    }

    public void setListaUsuarios(List<Usuario> listaUsuarios) {
        this.listaUsuarios = listaUsuarios;
    } 
    

	public List<Medicion> getListaMediciones() {
		return listaMediciones;
	}
	
	public void setListaMediciones(List<Medicion> listaMediciones) {
		this.listaMediciones = listaMediciones;
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

