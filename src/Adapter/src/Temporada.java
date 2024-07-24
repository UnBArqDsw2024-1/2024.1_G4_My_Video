import java.util.ArrayList;

public class Temporada {
    private int numero;
    private ArrayList<Episodio> episodios;

    // Getters and Setters

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public ArrayList<Episodio> getEpisodios() {
        return episodios;
    }

    public void setEpisodios(ArrayList<Episodio> episodios) {
        this.episodios = episodios;
    }

    public ArrayList<Episodio> listarEpisodio() {
        return episodios;
    }
}