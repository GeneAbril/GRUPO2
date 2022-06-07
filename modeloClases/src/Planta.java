public class Planta {
    private int id;
    private String nombre;
    private float temperatura;
    private float humendad;
    private int usuario_id;

    public Planta() {
        super();
    }

    public Planta(int id, String nombre, float temperatura, float humendad, int usuario_id) {
        super();
        this.id = id;
        this.nombre = nombre;
        this.temperatura = temperatura;
        this.humendad = humendad;
        this.usuario_id = usuario_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
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

    public int getUsuario_id() {
        return usuario_id;
    }

    public void setUsuario_id(int usuario_id) {
        this.usuario_id = usuario_id;
    }

    @Override
    public String toString() {
        return "Planta [id=" + id + ", nombre=" + nombre + ", temperatura=" + temperatura + ", humendad=" + humendad
                + ", usuario_id=" + usuario_id + "]";
    }
}
