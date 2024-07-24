import { Episodio } from './episodio';

export class Temporada {
    private numero: number;
    private episodios: Episodio[];

    constructor(numero: number) {
        this.numero = numero;
        this.episodios = [];
    }

    // Métodos getter e setter
    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getEpisodios(): Episodio[] {
        return this.episodios;
    }

    public setEpisodios(episodios: Episodio[]): void {
        this.episodios = episodios;
    }

    // Método para listar episódios
    public listarEpisodios(): Episodio[] {
        return this.episodios;
    }

    // Método para adicionar um episódio
    public adicionarEpisodio(episodio: Episodio): void {
        this.episodios.push(episodio);
    }

    // Método para imprimir informações da temporada
    public printarInformacoes(): void {
        console.log(`---- Temporada ${this.numero} ----`);
        for (const episodio of this.episodios) {
            episodio.printarInformacoes();
        }
    }
}