/*  descripcion: creacion de objeto dispositivo y tabla dispositivos
 *   interaccion tablas: dispositivos
 *   interaccion codigos: ...*/

public class Dispositivo {
    /** Atributos*/
    private Long id;
    private String codigo;
    private Boolean sensorHumedad;
    private Boolean sensorTemp;
    private String ubicacion;
    private String observacion;

    /** constructores*/
    public Dispositivo() {
    }

    public Dispositivo(Long id, String codigo, Boolean sensorHumedad, Boolean sensorTemp, String ubicacion, String observacion) {
        this.id = id;
        this.codigo = codigo;
        this.sensorHumedad = sensorHumedad;
        this.sensorTemp = sensorTemp;
        this.ubicacion = ubicacion;
        this.observacion = observacion;
    }



    /** getter and setter*/
    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Boolean getSensorHumedad() {
        return sensorHumedad;
    }

    public void setSensorHumedad(Boolean sensorHumedad) {
        this.sensorHumedad = sensorHumedad;
    }

    public Boolean getSensorTemp() {
        return sensorTemp;
    }

    public void setSensorTemp(Boolean sensorTemp) {
        this.sensorTemp = sensorTemp;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }
}
