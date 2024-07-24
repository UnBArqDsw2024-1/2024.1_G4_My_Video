"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filme_factory_1 = require("./factories/filme-factory");
const serie_factory_1 = require("./factories/serie-factory");
const episodio_1 = require("./models/episodio");
const temporada_1 = require("./models/temporada");
const filme_1 = require("./models/filme");
const serie_1 = require("./models/serie");
// Função principal
function main() {
    const filmeFactory = new filme_factory_1.FilmeFactory();
    const serieFactory = new serie_factory_1.SerieFactory();
    const filme = filmeFactory.criarMidia('ToyStory', 'O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe novos brinquedos que possam substituí-los.', 1995, 120, 'Ação', 'Livre', ['Buzz', 'Woody'], 'John Lasseter', 'Pete Docter');
    const serie = serieFactory.criarMidia('Friends', 'Seis amigos, três homens e três mulheres, enfrentam a vida e os amores em Nova York', 1994, 194, 'Comédia', 'PG-13', ['Jennifer Aniston', 'Lisa Kudrow'], 'David Crane', 'Marta Kauffman');
    if (filme instanceof filme_1.Filme) {
        console.log("-------------------- FILMES --------------------");
        filme.printarInformacoes();
    }
    if (serie instanceof serie_1.Serie) {
        const temporada1 = new temporada_1.Temporada(1);
        temporada1.adicionarEpisodio(new episodio_1.Episodio('Episódio 1', 1, 45, 'Os seis amigos se despedem e iniciam um novo capítulo em suas vidas; eventos importantes e surpresas de última hora.'));
        temporada1.adicionarEpisodio(new episodio_1.Episodio('Episódio 2', 2, 50, 'Os seis amigos preparam-se para dar adeus e iniciar os capítulos seguintes de suas vidas; eventos memoráveis e surpresas de última hora.'));
        const temporada2 = new temporada_1.Temporada(2);
        temporada2.adicionarEpisodio(new episodio_1.Episodio('Episódio 1', 1, 47, 'Um dos membros do grupo fica ofendido quando Rachel não lhe dá o mesmo tchau do que dá aos outros.'));
        temporada2.adicionarEpisodio(new episodio_1.Episodio('Episódio 2', 2, 52, 'Uma nevasca provoca muitos problemas no casamento de Phoebe e Mike; Monica se apresenta como a organizadora do casamento e enlouquece todo mundo.'));
        serie.adicionarTemporada(temporada1);
        serie.adicionarTemporada(temporada2);
        console.log("-------------------- SÉRIES --------------------");
        serie.printarInformacoes();
    }
}
main();
