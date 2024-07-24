import { Midia } from './midia';

export class Filme extends Midia {
    private diretor: string;
    private roteirista: string;

    constructor(
        titulo: string,
        descricao: string,
        anoLancamento: number,
        duracao: number,
        genero: string,
        classificacao: string,
        elenco: string[],
        diretor: string,
        roteirista: string
    ) {
        super(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco);
        this.diretor = diretor;
        this.roteirista = roteirista;
    }

    public printarInformacoes(): void {
        console.log(`Filme: ${this.titulo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Ano de Lançamento: ${this.anoLancamento}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Classificação: ${this.classificacao}`);
        console.log(`Elenco: ${this.elenco.join(', ')}`);
        console.log(`Diretor: ${this.diretor}`);
        console.log(`Roteirista: ${this.roteirista}`);
    }
}
