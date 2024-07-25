import Episodio from './episodio';

class Temporada {
    private numero: number = 0;
    private episodios: Episodio[] = [];

    // Getters and Setters
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

    public listarEpisodio(): Episodio[] {
        return this.episodios;
    }
}

export default Temporada;