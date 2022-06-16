/*  descripcion: creacion de objeto planta y tabla plantas
*   interaccion tablas: dispositivos
*   interaccion codigos: ...*/


public class Planta {

    /**atributos*/
    private Long id;
    private String nombre;
    private String nombre_cientifico;
    private String tipo;
    private Long dispositivo_id;
    private String fecha_plantacion;


    /**constructores*/
    public Planta() {
        super();
    }

    public Planta(Long id, String nombre, String nombre_cientifico, String tipo, Long dispositivo_id, String fecha_plantacion) {
        this.id = id;
        this.nombre = nombre;
        this.nombre_cientifico = nombre_cientifico;
        this.tipo = tipo;
        this.dispositivo_id = dispositivo_id;
        this.fecha_plantacion = fecha_plantacion;
    }


    /** getter and setter*/
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

    public String getNombre_cientifico() {
        return nombre_cientifico;
    }

    public void setNombre_cientifico(String nombre_cientifico) {
        this.nombre_cientifico = nombre_cientifico;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Long getDispositivo_id() {
        return dispositivo_id;
    }

    public void setDispositivo_id(Long dispositivo_id) {
        this.dispositivo_id = dispositivo_id;
    }

    public String getFecha_plantacion() {
        return fecha_plantacion;
    }

    public void setFecha_plantacion(String fecha_plantacion) {
        this.fecha_plantacion = fecha_plantacion;
    }
}