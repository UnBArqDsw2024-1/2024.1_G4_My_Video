import java.util.ArrayList;

public class Serie extends Midia {
    private int numeroTemporadas;
    private ArrayList<String> criadores;
    private ArrayList<Temporada> temporadas;

    // Getters and Setters

    public int getNumeroTemporadas() {
        return numeroTemporadas;
    }

    public void setNumeroTemporadas(int numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    }

    public ArrayList<String> getCriadores() {
        return criadores;
    }

    public void setCriadores(ArrayList<String> criadores) {
        this.criadores = criadores;
    }

    public ArrayList<Temporada> getTemporadas() {
        return temporadas;
    }

    public void setTemporadas(ArrayList<Temporada> temporadas) {
        this.temporadas = temporadas;
    }

    public ArrayList<Temporada> listarTemporada() {
        return temporadas;
    }
}