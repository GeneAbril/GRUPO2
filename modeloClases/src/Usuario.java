public class Usuario {

    //declaracion de variables
    private Integer id;
    private String nombre;
    private String correo;
    private String contraseña;
    private Integer region_id;

    //constructores
    public Usuario() {
    }

    public Usuario(Integer id, String nombre, String correo, String contraseña, Integer region_id) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
        this.region_id = region_id;
    }

    //getter y setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public Integer getRegion_id() {
        return region_id;
    }

    public void setRegion_id(Integer region_id) {
        this.region_id = region_id;
    }

    //metodos

    @Override
    public String toString() {
        return "Usuarios{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", correo='" + correo + '\'' +
                ", contraseña='" + contraseña + '\'' +
                ", region_id=" + region_id +
                '}';
    }
}