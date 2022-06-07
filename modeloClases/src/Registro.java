public class Registro {

    //declaracion de variables
    private Integer id;
    private Integer planta_id;

    //constructores


    public Registro() {
    }

    public Registro(Integer id, Integer planta_id) {
        this.id = id;
        this.planta_id = planta_id;
    }

    //getter y setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPlanta_id() {
        return planta_id;
    }

    public void setPlanta_id(Integer planta_id) {
        this.planta_id = planta_id;
    }

    //metodos


    @Override
    public String toString() {
        return "Registros{" +
                "id=" + id +
                ", planta_id=" + planta_id +
                '}';
    }
}
