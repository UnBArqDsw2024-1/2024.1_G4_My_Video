import { Midia } from './midia';
import { Temporada } from './temporada';

export class Serie extends Midia {
    private numeroTemporadas: number;
    private temporadas: Temporada[];
    private criadores: string[];

    constructor(
        titulo: string,
        descricao: string,
        anoLancamento: number,
        duracao: number,
        genero: string,
        classificacao: string,
        elenco: string[]
    ) {
        super(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco);
        this.numeroTemporadas = 0;
        this.temporadas = [];
        this.criadores = [];
    }

    // Métodos getter e setter
    public getNumeroTemporadas(): number {
        return this.numeroTemporadas;
    }

    public setNumeroTemporadas(numeroTemporadas: number): void {
        this.numeroTemporadas = numeroTemporadas;
    }

    public getTemporadas(): Temporada[] {
        return this.temporadas;
    }

    public setTemporadas(temporadas: Temporada[]): void {
        this.temporadas = temporadas;
    }

    public getCriadores(): string[] {
        return this.criadores;
    }

    public setCriadores(criadores: string[]): void {
        this.criadores = criadores;
    }

    // Método para listar temporadas
    public listarTemporadas(): Temporada[] {
        return this.temporadas;
    }

    // Método para adicionar uma temporada
    public adicionarTemporada(temporada: Temporada): void {
        this.temporadas.push(temporada);
        this.numeroTemporadas = this.temporadas.length;
    }

    // Método para imprimir informações da série
    public printarInformacoes(): void {
        console.log(`Série: ${this.titulo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Ano de Lançamento: ${this.anoLancamento}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Classificação: ${this.classificacao}`);
        console.log(`Número de Temporadas: ${this.numeroTemporadas}`);
        console.log(`Elenco: ${this.elenco ? this.elenco.join(', ') : 'N/A'}`);
        for (const temporada of this.temporadas) {
            temporada.printarInformacoes();
        }
    }
}