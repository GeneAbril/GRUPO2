package com.grupo2.modelos;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

@Entity// hacer entidad el objeto
@Table(name="Usuarios")//renombrar base de datos
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private Long id;
    private String nombre;
    private String apellido;
    private String correo;
    private String clave;

    @Column(updatable = false)
    private Date createdAt;
    
    private Date updatedAt;

    //mappeo desde usuario a dispositivo
    @ManyToMany(mappedBy = "listaUsuarios",fetch=FetchType.EAGER)
private List <Dispositivo> listaDispositivos;

    public Usuario(List<Dispositivo> listaDispositivos) {
        this.listaDispositivos = listaDispositivos;
    }
    //CONSTRUCTOR VACIO
    public Usuario() {
    }
 //CONSTRUCTOR CON PARAMETROS
    public Usuario(Long id, String nombre, String apellido, String correo, String clave) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.clave = clave;
    }

    //GETTERS AND SETTERS
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
    public List<Dispositivo> getListaDispositivos() {
        return listaDispositivos;
    }
    public void setListaDispositivos(List<Dispositivo> listaDispositivos) {
        this.listaDispositivos = listaDispositivos;
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
