public class Region {

    //creacion de variables
    private Integer id;
    private String nombre;

    //constructores
    public Region() {
    }

    public Region(Integer id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    //geter y setters

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

    //metodos

    @java.lang.Override
    public java.lang.String toString() {
        return "Region{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                '}';
    }
}
