const filmes = [
  {
    titulo: "Vingadores: Ultimato",
    dataLancamento: "2019-04-26",
    descricao:
      "Os heróis restantes se unem para reverter as ações de Thanos e restaurar o equilíbrio no universo.",
    categorias: ["Ação", "Aventura", "Ficção científica"],
    tipo: "Filme",
    duracaoEmMinutos: 182,
  },
  {
    titulo: "Vingadores: Guerra Infinita",
    dataLancamento: "2018-04-27",
    descricao:
      "Os Vingadores e seus aliados precisam estar dispostos a sacrificar tudo para derrotar o poderoso Thanos antes que ele acabe com o universo.",
    categorias: ["Ação", "Aventura", "Ficção científica"],
    tipo: "Filme",
    duracaoEmMinutos: 149,
  },
  {
    titulo: "Pantera Negra",
    dataLancamento: "2018-02-16",
    descricao:
      "Um rei guerreiro é forçado a revelar o poder de seu país tecnologicamente avançado.",
    categorias: ["Ação", "Aventura", "Ficção científica"],
    tipo: "Filme",
    duracaoEmMinutos: 134,
  },
  {
    titulo: "Jurassic World: Reino Ameaçado",
    dataLancamento: "2018-06-07",
    descricao:
      "Três anos após o desastre em Jurassic World, os dinossauros vivem e caçam livremente na ilha Nublar. Quando um vulcão ativo ameaça extingui-los, Owen e Claire se unem para resgatá-los.",
    categorias: ["Ação", "Aventura", "Ficção científica"],
    tipo: "Filme",
    duracaoEmMinutos: 128,
  },
  {
    titulo: "Capitão Marvel",
    dataLancamento: "2019-03-08",
    descricao:
      "Carol Danvers se torna uma das guerreiras mais poderosas do universo quando a Terra fica no meio de uma guerra galáctica entre duas raças alienígenas.",
    categorias: ["Ação", "Aventura", "Ficção científica"],
    tipo: "Filme",
    duracaoEmMinutos: 123,
  },
  {
    titulo: "Coringa",
    dataLancamento: "2019-10-04",
    descricao:
      "Em 1981, um homem mentalmente instável é demitido de seu trabalho como palhaço e mergulha em um espiral de loucura e violência.",
    categorias: ["Drama", "Suspense", "Crime"],
    tipo: "Filme",
    duracaoEmMinutos: 122,
  },
  {
    titulo: "Homem-Aranha: Longe de Casa",
    dataLancamento: "2019-07-02",
    descricao:
      "Peter Parker precisa lidar com as consequências de sua identidade como o herói Homem-Aranha ter sido revelada.",
    categorias: ["Ação", "Aventura", "Ficção científica"],
    tipo: "Filme",
    duracaoEmMinutos: 129,
  },
  {
    titulo: "Aladdin",
    dataLancamento: "2019-05-24",
    descricao:
      "Um jovem de rua chamado Aladdin descobre uma lâmpada mágica com um gênio dentro. Com a ajuda do gênio, ele tenta conquistar o coração da princesa Jasmine.",
    categorias: ["Ação", "Aventura", "Comédia", "Romance", "Família"],
    tipo: "Filme",
    duracaoEmMinutos: 128,
  },
  {
    titulo: "Rei Leão",
    dataLancamento: "2019-07-19",
    descricao:
      "Após a morte de seu pai, o jovem leão Simba precisa enfrentar seu tio Scar para recuperar seu lugar como rei da savana.",
    categorias: ["Animação", "Aventura", "Drama", "Família"],
    tipo: "Filme",
    duracaoEmMinutos: 118,
  },
  {
    titulo: "Frozen 2",
    dataLancamento: "2019-11-22",
    descricao:
      "Anna, Elsa, Kristoff, Olaf e Sven partem em uma nova jornada além dos portões de Arendelle para encontrar origens do poder de Elsa e salvar seu reino.",
    categorias: [
      "Animação",
      "Aventura",
      "Comédia",
      "Família",
      "Fantasia",
      "Musical",
    ],
    tipo: "Filme",
    duracaoEmMinutos: 103,
  },
];

const series = [
  {
    titulo: "Game of Thrones",
    descricao:
      "Baseada na série de livros de George R.R. Martin, a série segue a luta pelo Trono de Ferro em um mundo de fantasia medieval.",
    categorias: ["Ação", "Aventura", "Drama", "Fantasia"],
    tipo: "Serie",
    temporada: 8,
    duracaoMediaEpsodioEmMinutos: 55,
  },
  {
    titulo: "Stranger Things",
    descricao:
      "Um grupo de crianças enfrenta forças sobrenaturais e experimentos governamentais enquanto procura por seu amigo desaparecido.",
    categorias: ["Drama", "Ficção científica", "Terror"],
    tipo: "Serie",
    temporada: 4,
    duracaoMediaEpsodioEmMinutos: 50,
  },
  {
    titulo: "Breaking Bad",
    descricao:
      "Um professor de química se torna fabricante de metanfetamina após ser diagnosticado com câncer, tentando assegurar o futuro financeiro de sua família.",
    categorias: ["Crime", "Drama", "Suspense"],
    tipo: "Serie",
    temporada: 5,
    duracaoMediaEpsodioEmMinutos: 47,
  },
  {
    titulo: "The Mandalorian",
    descricao:
      "Um caçador de recompensas solitário navega pela galáxia após a queda do Império, enquanto protege uma criatura misteriosa.",
    categorias: ["Ação", "Aventura", "Ficção científica"],
    tipo: "Serie",
    temporada: 3,
    duracaoMediaEpsodioEmMinutos: 40,
  },
  {
    titulo: "The Witcher",
    descricao:
      "Um caçador de monstros solitário, Geralt de Rivia, navega por um mundo repleto de magia e intrigas políticas.",
    categorias: ["Ação", "Aventura", "Fantasia"],
    tipo: "Serie",
    temporada: 2,
    duracaoMediaEpsodioEmMinutos: 60,
  },
  {
    titulo: "The Crown",
    descricao:
      "A série retrata a vida da Rainha Elizabeth II e os eventos que moldaram a segunda metade do século XX.",
    categorias: ["Biografia", "Drama", "Histórico"],
    tipo: "Serie",
    temporada: 6,
    duracaoMediaEpsodioEmMinutos: 58,
  },
  {
    titulo: "Money Heist (La Casa de Papel)",
    descricao:
      "Um grupo de criminosos realiza um assalto à Casa da Moeda da Espanha, enquanto um professor os guia com um plano meticuloso.",
    categorias: ["Ação", "Crime", "Drama"],
    tipo: "Serie",
    temporada: 5,
    duracaoMediaEpsodioEmMinutos: 45,
  },
  {
    titulo: "The Walking Dead",
    descricao:
      "Um grupo de sobreviventes luta para se manter vivo em um mundo pós-apocalíptico repleto de zumbis.",
    categorias: ["Drama", "Terror", "Aventura"],
    tipo: "Serie",
    temporada: 11,
    duracaoMediaEpsodioEmMinutos: 43,
  },
  {
    titulo: "The Boys",
    descricao:
      "Um grupo de vigilantes luta contra super-heróis corruptos que abusam de seus poderes em um mundo onde eles são celebridades.",
    categorias: ["Ação", "Comédia", "Drama"],
    tipo: "Serie",
    temporada: 3,
    duracaoMediaEpsodioEmMinutos: 60,
  },
  {
    titulo: "Fleabag",
    descricao:
      "Uma jovem navega por relacionamentos complicados e a vida em Londres, enquanto lida com a perda e a dor.",
    categorias: ["Comédia", "Drama"],
    tipo: "Serie",
    temporada: 2,
    duracaoMediaEpsodioEmMinutos: 30,
  },
];

export type DadosConteudo =
  | {
      titulo: string;
      dataLancamento: string;
      descricao: string;
      categorias: string[];
      tipo: string;
      duracaoEmMinutos: number;
    }
  | {
      titulo: string;
      descricao: string;
      categorias: string[];
      tipo: string;
      temporada: number;
      duracaoMediaEpsodioEmMinutos: number;
    };

export const conteudos: DadosConteudo[] = [...filmes, ...series];
