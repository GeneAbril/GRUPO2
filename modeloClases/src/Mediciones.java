public class Mediciones {
    
    //declaracion de variables
    private Long id;
    private Long dispositivo_id;
    private float temperatura;
    private float humendad;
    private String fecha;
    
    //constructores
    public Mediciones() {
    }
    
    public Mediciones(Long id, Long dispositivo_id, float temperatura, float humendad, String fecha) {
        this.id = id;
        this.dispositivo_id = dispositivo_id;
        this.temperatura = temperatura;
        this.humendad = humendad;
        this.fecha = fecha;
    }
    
    //getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDispositivo_id() {
        return dispositivo_id;
    }

    public void setDispositivo_id(Long dispositivo_id) {
        this.dispositivo_id = dispositivo_id;
    }

    public float getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(float temperatura) {
        this.temperatura = temperatura;
    }

    public float getHumendad() {
        return humendad;
    }

    public void setHumendad(float humendad) {
        this.humendad = humendad;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    



}
