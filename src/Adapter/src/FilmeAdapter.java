import java.util.ArrayList;

public class FilmeAdapter extends Serie {
    private Filme filme;

    public FilmeAdapter(Filme filme) {
        this.filme = filme;
        // Configurar informações de Midia
        this.setTitulo(filme.getTitulo());
        this.setDescricao(filme.getDescricao());
        this.setAnoLancamento(filme.getAnoLancamento());
        this.setDuracao(filme.getDuracao());
        this.setGenero(filme.getGenero());
        this.setClassificacao(filme.getClassificacao());
        this.setElenco(filme.getElenco());

        // Configurar informações de Serie
        this.setNumeroTemporadas(1); // Como é um filme, consideramos uma única temporada
        ArrayList<Temporada> temporadas = new ArrayList<>();
        Temporada temporada = new Temporada();
        temporada.setNumero(1);

        Episodio episodio = new Episodio();
        episodio.setTitulo(filme.getTitulo());
        episodio.setNumero(1);
        episodio.setDuracao(filme.getDuracao());
        episodio.setDescricao(filme.getDescricao());

        ArrayList<Episodio> episodios = new ArrayList<>();
        episodios.add(episodio);
        temporada.setEpisodios(episodios);

        temporadas.add(temporada);
        this.setTemporadas(temporadas);

        ArrayList<String> criadores = new ArrayList<>();
        criadores.add(filme.getDiretor());
        criadores.add(filme.getRoteirista());
        this.setCriadores(criadores);
    }

    @Override
    public ArrayList<Temporada> listarTemporada() {
        return this.getTemporadas();
    }

    // Não precisamos sobrescrever os getters para numeroTemporadas e criadores
}