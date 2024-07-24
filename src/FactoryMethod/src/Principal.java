import java.util.ArrayList;

public class Principal {

    public static void main(String[] args) {
        MidiaFactory filmeFactory = new FilmeFactory();

        ArrayList<String> elencoSerie = new ArrayList<>();
        elencoSerie.add("Jennifer Aniston");
        elencoSerie.add("Lisa Kudrow");

        ArrayList<String> elencoFilme = new ArrayList<>();
        elencoFilme.add("Buzz");
        elencoFilme.add("Woody");

        Filme filme = (Filme) filmeFactory.criarMidia("ToyStory", "O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe novos brinquedos que possam substituí-los.", 1995 , 120, "Ação", "Livre", elencoFilme);

        filme.printarInformacoes();

        System.out.println("-----------------------------");

        MidiaFactory serieFactory = new SerieFactory();

        Serie serie = (Serie) serieFactory.criarMidia("Friends", "Seis amigos, três homens e três mulheres, enfrentam a vida e os amores em Nova York", 1994 , 194, "Comédia", "PG-13", elencoSerie);

        // Adicionar temporadas e episódios à série
        Temporada temporada1 = new Temporada(1);
        temporada1.adicionarEpisodio(new Episodio("Episódio 1", 1, 45, "Os seis amigos se despedem e iniciam um novo capítulo em suas vidas; eventos importantes e surpresas de última hora."));
        temporada1.adicionarEpisodio(new Episodio("Episódio 2", 2, 50, "Os seis amigos preparam-se para dar adeus e iniciar os capítulos seguintes de suas vidas; eventos memoráveis e surpresas de última hora."));

        Temporada temporada2 = new Temporada(2);
        temporada2.adicionarEpisodio(new Episodio("Episódio 1", 1, 47, "Um dos membros do grupo fica ofendido quando Rachel não lhe dá o mesmo tchau do que dá aos outros."));
        temporada2.adicionarEpisodio(new Episodio("Episódio 2", 2, 52, "Uma nevasca provoca muitos problemas no casamento de Phoebe e Mike; Monica se apresenta como a organizadora do casamento e enlouquece todo mundo."));

        serie.adicionarTemporada(temporada1);
        serie.adicionarTemporada(temporada2);

        serie.printarInformacoes();

    }
}