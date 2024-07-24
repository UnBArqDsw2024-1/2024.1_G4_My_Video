import { Midia } from "../midia/midia";

export type DadosFilme = {
  titulo: string;
  descricao: string;
  dataLancamento: string;
  categorias: string[];
  duracaoEmMinutos: number;
};

export class Filme implements Midia {
  titulo: string;
  descricao: string;
  dataLancamento: string;
  categorias: string[];
  duracaoEmMinutos: number;
  constructor({
    titulo,
    descricao,
    dataLancamento,
    categorias,
    duracaoEmMinutos,
  }: DadosFilme) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.dataLancamento = dataLancamento;
    this.categorias = categorias;
    this.duracaoEmMinutos = duracaoEmMinutos;
  }

  indexarConteudo() {
    console.log(`Dados indexados com sucesso.`);
    console.log({
      titulo: this.titulo,
      descricao: this.descricao,
      categorias: this.categorias,
      metadados: {
        dataLancamento: this.dataLancamento,
        duracaoEmMinutos: this.duracaoEmMinutos,
      },
    });
  }

  salvarFilme() {
    console.log(`Filme "${this.titulo}" foi salvo com sucesso.`);
  }
}
