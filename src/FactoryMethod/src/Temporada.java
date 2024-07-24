import java.util.ArrayList;

public class Temporada {
    private int numero;
    private ArrayList<Episodio> episodios;

    public Temporada(int numero) {
        this.numero = numero;
        this.episodios = new ArrayList<>();
    }

    // Métodos getter e setter
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

    // Método para listar episódios
    public ArrayList<Episodio> listarEpisodios() {
        return episodios;
    }

    // Método para adicionar um episódio
    public void adicionarEpisodio(Episodio episodio) {
        this.episodios.add(episodio);
    }

    // Método para imprimir informações da temporada
    public void printarInformacoes() {
        System.out.println("Temporada " + numero);
        for (Episodio episodio : episodios) {
            episodio.printarInformacoes();
        }
    }
}
