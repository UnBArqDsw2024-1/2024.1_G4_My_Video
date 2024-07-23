import { PlataformaWebPlayer } from './factories/plataforma-web-player';
import { PlataformaMobileApp } from './factories/plataforma-mobile-app';

// Cria instâncias das fábricas para plataformas web e mobile
const webApp = new PlataformaWebPlayer();
const mobileApp = new PlataformaMobileApp();

// Cria uma lista de filmes para a plataforma web
const filmesWebPlayer = [
    webApp.criarFilme('O Senhor dos Anéis', 'Uma jornada épica', 2001, 'Fantasia'),
    webApp.criarFilme('Matrix', 'Realidade simulada', 1999, 'Ficção científica')
];

// Cria uma lista de séries para a plataforma web
const seriesWebPlayer = [
    webApp.criarSerie('Breaking Bad', 'Químico em apuros', 5, 'Drama'),
    webApp.criarSerie('Stranger Things', 'Mistérios de Hawkins', 4, 'Terror')
];

// Cria uma lista de filmes para a plataforma mobile
const filmesMobileApp = [
    mobileApp.criarFilme('Inception', 'Sonhos dentro de sonhos', 2010, 'Ação'),
    mobileApp.criarFilme('Interstellar', 'Viagem no espaço', 2014, 'Ficção científica')
];

// Cria uma lista de séries para a plataforma mobile
const seriesMobileApp = [
    mobileApp.criarSerie('The Crown', 'A rainha e sua família', 5, 'História'),
    mobileApp.criarSerie('The Witcher', 'Caçador de monstros', 2, 'Fantasia')
];

// Exibe os filmes da plataforma web
console.log('Filmes Web:' + '\n');
filmesWebPlayer.forEach(filme => console.log('- ' + filme.detalhes() + '\n'));

// Exibe as séries da plataforma web
console.log('Séries Web:' + '\n');
seriesWebPlayer.forEach(serie => console.log('- ' + serie.detalhes() + '\n'));

// Exibe os filmes e séries da plataforma mobile
console.log('Filmes Mobile:' + '\n');
filmesMobileApp.forEach(filme => console.log('- ' + filme.detalhes() + '\n'));

// Exibe as séries da plataforma mobile
console.log('Séries Mobile:' + '\n');
seriesMobileApp.forEach(serie => console.log('- ' + serie.detalhes() + '\n'));