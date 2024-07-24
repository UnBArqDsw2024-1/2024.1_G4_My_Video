import { MidiaFactory } from './factories/midia-factory';
import { FilmeFactory } from './factories/filme-factory';
import { SerieFactory } from './factories/serie-factory';
import { Episodio } from './models/episodio';
import { Temporada } from './models/temporada';
import { Filme } from './models/filme';
import { Serie } from './models/serie';

// Função principal
function main() {
    const filmeFactory: MidiaFactory = new FilmeFactory();
    const serieFactory: MidiaFactory = new SerieFactory();

    const filme = filmeFactory.criarMidia(
        'ToyStory',
        'O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe novos brinquedos que possam substituí-los.',
        1995,
        120,
        'Ação',
        'Livre',
        ['Buzz', 'Woody'],
        'John Lasseter',
        'Pete Docter'
    );

    const serie = serieFactory.criarMidia(
        'Friends',
        'Seis amigos, três homens e três mulheres, enfrentam a vida e os amores em Nova York',
        1994,
        194,
        'Comédia',
        'PG-13',
        ['Jennifer Aniston', 'Lisa Kudrow'],
        'David Crane',
        'Marta Kauffman'
    );

    if (filme instanceof Filme) {
        console.log("-------------------- FILMES --------------------");
        filme.printarInformacoes();
    }

    if (serie instanceof Serie) {
        const temporada1 = new Temporada(1);
        temporada1.adicionarEpisodio(new Episodio(
            'Episódio 1', 1, 45, 'Os seis amigos se despedem e iniciam um novo capítulo em suas vidas; eventos importantes e surpresas de última hora.'
        ));
        temporada1.adicionarEpisodio(new Episodio(
            'Episódio 2', 2, 50, 
            'Os seis amigos preparam-se para dar adeus e iniciar os capítulos seguintes de suas vidas; eventos memoráveis e surpresas de última hora.'
        ));

        const temporada2 = new Temporada(2);
        temporada2.adicionarEpisodio(new Episodio(
            'Episódio 1', 1, 47, 'Um dos membros do grupo fica ofendido quando Rachel não lhe dá o mesmo tchau do que dá aos outros.'
        ));
        temporada2.adicionarEpisodio(new Episodio(
            'Episódio 2', 2, 52, 
            'Uma nevasca provoca muitos problemas no casamento de Phoebe e Mike; Monica se apresenta como a organizadora do casamento e enlouquece todo mundo.'
        ));

        serie.adicionarTemporada(temporada1);
        serie.adicionarTemporada(temporada2);

        console.log("-------------------- SÉRIES --------------------");
        serie.printarInformacoes();
    }
}

main();