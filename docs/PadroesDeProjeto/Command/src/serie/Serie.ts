import { Midia } from "../midia/midia";

export class Serie implements Midia {
  titulo: string;
  descricao: string;
  categorias: string[];
  temporada: number;
  numeroEpsodio: number;
  duracaoMediaEpsodioEmMinutos: number;

  indexarConteudo() {
    console.log("Serie indexada.");
  }

  salvarEpsodio() {
    console.log("Epsodio salvo.");
  }
}
