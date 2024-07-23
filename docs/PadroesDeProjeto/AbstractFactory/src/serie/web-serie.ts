import { Serie } from "./serie";

export class WebSerie implements Serie {
    titulo: string;
    descricao: string;
    temporada: number;
    genero: string;

    // Construtor para inicializar as propriedades da classe
    constructor(titulo: string, descricao: string, temporada: number, genero: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.temporada = temporada;
        this.genero = genero;
    }

    // Método que retorna uma string com os detalhes das séries
    detalhes(): string {
        return `${this.titulo} - Temporada ${this.temporada} (${this.genero}): ${this.descricao}`;
    }
}