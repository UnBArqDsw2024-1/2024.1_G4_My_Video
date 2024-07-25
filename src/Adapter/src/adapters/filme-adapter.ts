import Serie from '../models/serie';
import Filme from '../models/filme';
import Temporada from '../models/temporada';
import Episodio from '../models/episodio';

class FilmeAdapter extends Serie {
    private filme: Filme;

    constructor(filme: Filme) {
        super();
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
        const temporadas: Temporada[] = [];
        const temporada = new Temporada();
        temporada.setNumero(1);

        const episodio = new Episodio();
        episodio.setTitulo(filme.getTitulo());
        episodio.setNumero(1);
        episodio.setDuracao(filme.getDuracao());
        episodio.setDescricao(filme.getDescricao());

        const episodios: Episodio[] = [];
        episodios.push(episodio);
        temporada.setEpisodios(episodios);

        temporadas.push(temporada);
        this.setTemporadas(temporadas);

        const criadores: string[] = [];
        criadores.push(filme.getDiretor());
        criadores.push(filme.getRoteirista());
        this.setCriadores(criadores);
    }

    public listarTemporada(): Temporada[] {
        return this.getTemporadas();
    }
}

export default FilmeAdapter;