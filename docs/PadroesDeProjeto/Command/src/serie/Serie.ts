import { Midia } from "../midia/midia";

export type DadosSerie = {
  titulo: string;
  descricao: string;
  categorias: string[];
  temporada: number;
  numeroEpsodio: number;
  duracaoMediaEpsodioEmMinutos: number;
};

export class Serie implements Midia {
  titulo: string;
  descricao: string;
  categorias: string[];
  temporada: number;
  numeroEpsodio: number;
  duracaoMediaEpsodioEmMinutos: number;
  constructor({
    titulo,
    descricao,
    temporada,
    categorias,
    numeroEpsodio,
    duracaoMediaEpsodioEmMinutos,
  }: DadosSerie) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.temporada = temporada;
    this.categorias = categorias;
    this.numeroEpsodio = numeroEpsodio;
    this.duracaoMediaEpsodioEmMinutos = duracaoMediaEpsodioEmMinutos;
  }

  indexarConteudo() {
    console.log(`Dados indexados com sucesso.`);
    console.log({
      titulo: this.titulo,
      descricao: this.descricao,
      categorias: this.categorias,
      metadados: {
        temporada: this.temporada,
        numeroEpsodio: this.numeroEpsodio,
        duracaoMediaEpsodioEmMinutos: this.duracaoMediaEpsodioEmMinutos,
      },
    });
  }

  salvarEpsodio() {
    console.log(
      `Epsodio ${this.numeroEpsodio} da temporada ${this.temporada} de "${this.titulo}" foi salvo com sucesso.`
    );
  }
}
