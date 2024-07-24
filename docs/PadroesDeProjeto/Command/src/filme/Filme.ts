import { Midia } from "../midia/midia";

export class Filme implements Midia {
  titulo: string;
  descricao: string;
  dataLancamento: string;
  categorias: string[];
  duracaoEmMinutos: number;

  indexarConteudo() {
    console.log("Filme indexada.");
  }

  salvarFilme() {
    console.log("Filme salvo.");
  }
}
