import java.util.ArrayList;

public class Serie extends Midia {
    private int numeroTemporadas;
    private ArrayList<Temporada> temporadas;
    private ArrayList<String> criadores;

    public Serie(String titulo, String descricao, int anoLancamento, int duracao, String genero, String classificacao, ArrayList<String> elenco) {
        super(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco);
        this.temporadas = new ArrayList<>();
        this.criadores = new ArrayList<>();  // Inicialize a lista de criadores
    }


    // Métodos getter e setter
    public int getNumeroTemporadas() {
        return numeroTemporadas;
    }

    public void setNumeroTemporadas(int numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    }

    public ArrayList<Temporada> getTemporadas() {
        return temporadas;
    }

    public void setTemporadas(ArrayList<Temporada> temporadas) {
        this.temporadas = temporadas;
    }

    public ArrayList<String> getCriadores() {
        return criadores;
    }

    public void setCriadores(ArrayList<String> criadores) {
        this.criadores = criadores;
    }

    // Método para listar temporadas
    public ArrayList<Temporada> listarTemporadas() {
        return temporadas;
    }

    // Método para adicionar uma temporada
    public void adicionarTemporada(Temporada temporada) {
        this.temporadas.add(temporada);
        this.numeroTemporadas = temporadas.size();  // Atualiza o número de temporadas
    }

    // Método para imprimir informações da série
    public void printarInformacoes() {
        System.out.println("Série: " + titulo);
        System.out.println("Descrição: " + descricao);
        System.out.println("Ano de Lançamento: " + anoLancamento);
        System.out.println("Gênero: " + genero);
        System.out.println("Classificação: " + classificacao);
        System.out.println("Número de Temporadas: " + numeroTemporadas);
        System.out.println("Elenco: " + (elenco != null ? String.join(", ", elenco) : "N/A"));
        for (Temporada temporada : temporadas) {
            temporada.printarInformacoes();
        }
    }
}