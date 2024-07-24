import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Criação de um filme
        Filme filme = new Filme();
        filme.setTitulo("Inception");
        filme.setDescricao("A mind-bending thriller");
        filme.setAnoLancamento(2010);
        filme.setDuracao(148);
        filme.setGenero("Sci-Fi");
        filme.setClassificacao("PG-13");
        filme.setDiretor("Christopher Nolan");
        filme.setRoteirista("Christopher Nolan");

        ArrayList<String> elenco = new ArrayList<>();
        elenco.add("Leonardo DiCaprio");
        elenco.add("Joseph Gordon-Levitt");
        elenco.add("Elliot Page");
        filme.setElenco(elenco);

        // Criação de uma série
        Serie serie = new Serie();
        serie.setTitulo("Stranger Things");
        serie.setDescricao("A group of kids face supernatural forces");
        serie.setAnoLancamento(2016);
        serie.setDuracao(60);
        serie.setGenero("Sci-Fi");
        serie.setClassificacao("TV-14");

        ArrayList<String> criadores = new ArrayList<>();
        criadores.add("The Duffer Brothers");
        serie.setCriadores(criadores);

        ArrayList<Temporada> temporadas = new ArrayList<>();
        Temporada temporada1 = new Temporada();
        temporada1.setNumero(1);

        ArrayList<Episodio> episodios1 = new ArrayList<>();
        Episodio episodio1 = new Episodio();
        episodio1.setTitulo("Chapter One: The Vanishing of Will Byers");
        episodio1.setNumero(1);
        episodio1.setDuracao(47);
        episodio1.setDescricao("A young boy disappears, and his friends seek to find him.");

        episodios1.add(episodio1);
        temporada1.setEpisodios(episodios1);

        temporadas.add(temporada1);
        serie.setTemporadas(temporadas);
        serie.setNumeroTemporadas(1);

        // Usando o adaptador para tratar um filme como se fosse uma série
        FilmeAdapter filmeAdapter = new FilmeAdapter(filme);

        // Exibindo informações da série
        System.out.println("Série: " + serie.getTitulo());
        System.out.println("Descrição: " + serie.getDescricao());
        System.out.println("Número de Temporadas: " + serie.getNumeroTemporadas());
        for (Temporada temp : serie.listarTemporada()) {
            System.out.println("Temporada " + temp.getNumero());
            for (Episodio ep : temp.listarEpisodio()) {
                System.out.println("Episódio " + ep.getNumero() + ": " + ep.getTitulo());
            }
        }

        // Exibindo informações do filme usando o adaptador
        System.out.println("\nFilme adaptado como série:");
        System.out.println("Título: " + filmeAdapter.getTitulo());
        System.out.println("Descrição: " + filmeAdapter.getDescricao());
        System.out.println("Número de Temporadas: " + filmeAdapter.getNumeroTemporadas());
        for (Temporada temp : filmeAdapter.listarTemporada()) {
            System.out.println("Temporada " + temp.getNumero());
            for (Episodio ep : temp.listarEpisodio()) {
                System.out.println("Episódio " + ep.getNumero() + ": " + ep.getTitulo());
            }
        }
    }
}