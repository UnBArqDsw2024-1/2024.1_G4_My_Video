import Filme from './models/filme';
import Serie from './models/serie';
import Temporada from './models/temporada';
import Episodio from './models/episodio';
import FilmeAdapter from './adapters/filme-adapter';

function main() {
    // Criação de um filme
    const filme = new Filme();
    filme.setTitulo("Inception");
    filme.setDescricao("A mind-bending thriller");
    filme.setAnoLancamento(2010);
    filme.setDuracao(148);
    filme.setGenero("Sci-Fi");
    filme.setClassificacao("PG-13");
    filme.setDiretor("Christopher Nolan");
    filme.setRoteirista("Christopher Nolan");

    const elenco: string[] = [];
    elenco.push("Leonardo DiCaprio");
    elenco.push("Joseph Gordon-Levitt");
    elenco.push("Elliot Page");
    filme.setElenco(elenco);

    // Exibindo informações do filme
    console.log("Filme:");
    console.log("Título: " + filme.getTitulo());
    console.log("Descrição: " + filme.getDescricao());
    console.log("Ano de Lançamento: " + filme.getAnoLancamento());
    console.log("Duração: " + filme.getDuracao() + " minutos");
    console.log("Gênero: " + filme.getGenero());
    console.log("Classificação: " + filme.getClassificacao());
    console.log("Diretor: " + filme.getDiretor());
    console.log("Roteirista: " + filme.getRoteirista());
    console.log("Elenco: " + filme.getElenco().join(", "));

    // Criação de uma série
    const serie = new Serie();
    serie.setTitulo("Stranger Things");
    serie.setDescricao("A group of kids face supernatural forces");
    serie.setAnoLancamento(2016);
    serie.setDuracao(60);
    serie.setGenero("Sci-Fi");
    serie.setClassificacao("TV-14");

    const criadores: string[] = [];
    criadores.push("The Duffer Brothers");
    serie.setCriadores(criadores);

    const temporadas: Temporada[] = [];
    const temporada1 = new Temporada();
    temporada1.setNumero(1);

    const episodios1: Episodio[] = [];
    const episodio1 = new Episodio();
    episodio1.setTitulo("Chapter One: The Vanishing of Will Byers");
    episodio1.setNumero(1);
    episodio1.setDuracao(47);
    episodio1.setDescricao("A young boy disappears, and his friends seek to find him.");

    episodios1.push(episodio1);
    temporada1.setEpisodios(episodios1);

    temporadas.push(temporada1);
    serie.setTemporadas(temporadas);
    serie.setNumeroTemporadas(1);

    // Exibindo informações da série
    console.log("\nSérie:");
    console.log("Título: " + serie.getTitulo());
    console.log("Descrição: " + serie.getDescricao());
    console.log("Ano de Lançamento: " + serie.getAnoLancamento());
    console.log("Duração: " + serie.getDuracao() + " minutos");
    console.log("Gênero: " + serie.getGenero());
    console.log("Classificação: " + serie.getClassificacao());
    console.log("Criadores: " + serie.getCriadores().join(", "));
    console.log("Número de Temporadas: " + serie.getNumeroTemporadas());

    serie.listarTemporada().forEach((temp) => {
        console.log("Temporada " + temp.getNumero());
        temp.listarEpisodio().forEach((ep) => {
            console.log("  Episódio " + ep.getNumero() + ": " + ep.getTitulo());
            console.log("    Duração: " + ep.getDuracao() + " minutos");
            console.log("    Descrição: " + ep.getDescricao());
        });
    });

    // Usando o adaptador para tratar um filme como se fosse uma série
    const filmeAdapter = new FilmeAdapter(filme);

    // Exibindo informações do filme usando o adaptador
    console.log("\nFilme adaptado como série:");
    console.log("Título: " + filmeAdapter.getTitulo());
    console.log("Descrição: " + filmeAdapter.getDescricao());
    console.log("Ano de Lançamento: " + filmeAdapter.getAnoLancamento());
    console.log("Duração: " + filmeAdapter.getDuracao() + " minutos");
    console.log("Gênero: " + filmeAdapter.getGenero());
    console.log("Classificação: " + filmeAdapter.getClassificacao());
    console.log("Número de Temporadas: " + filmeAdapter.getNumeroTemporadas());

    filmeAdapter.listarTemporada().forEach((temp) => {
        console.log("Temporada " + temp.getNumero());
        temp.listarEpisodio().forEach((ep) => {
            console.log("  Episódio " + ep.getNumero() + ": " + ep.getTitulo());
            console.log("    Duração: " + ep.getDuracao() + " minutos");
            console.log("    Descrição: " + ep.getDescricao());
        });
    });
}

main();