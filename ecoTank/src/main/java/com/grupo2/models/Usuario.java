package com.grupo2.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name = "usuarios")
public class Usuario {

	// atributos
	//estas 2 lineas de codigo siguientes, se refieren a la variable id
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String nombre;
	private String apellido;
	private String correo;
	private String clave;

	@Transient
	private String claveConfirmacion;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(
		name = "dispositivos_usuarios",
		joinColumns = @JoinColumn(name = "usuario_id", nullable = false),
		inverseJoinColumns = @JoinColumn(name = "dispositivo_id", nullable = false)

	)
	private List<Dispositivo> listaDispositivos;
	
	//constructores
	public Usuario() {
		super();
	}

	public Usuario(Long id, String nombre, String apellido, String correo, String clave) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.clave = clave;
	}

	//Getters and Setters
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

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getClave() {
		return clave;
	}

	public void setClave(String clave) {
		this.clave = clave;
	}

	public String getClaveConfirmacion() {
		return claveConfirmacion;
	}

	public void setClaveConfirmacion(String claveConfirmacion) {
		this.claveConfirmacion = claveConfirmacion;
	}
	
	
}
