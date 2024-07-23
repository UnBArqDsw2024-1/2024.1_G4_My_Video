import { Filme } from "./filme";

export class MobileFilme implements Filme {
    titulo: string;
    descricao: string;
    ano: number;
    genero: string;

    // Construtor para inicializar as propriedades da classe
    constructor(titulo: string, descricao: string, ano: number, genero: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.ano = ano;
        this.genero = genero;
    }

    // Método que retorna uma string com os detalhes dos filmes
    detalhes(): string {
        return `${this.titulo} (${this.ano}) - ${this.genero}: ${this.descricao}`;
    }
}