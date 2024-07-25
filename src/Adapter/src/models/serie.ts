import Midia from './midia';
import Temporada from './temporada';

class Serie extends Midia {
    private numeroTemporadas: number = 0;
    private criadores: string[] = [];
    private temporadas: Temporada[] = [];

    // Getters and Setters
    public getNumeroTemporadas(): number {
        return this.numeroTemporadas;
    }

    public setNumeroTemporadas(numeroTemporadas: number): void {
        this.numeroTemporadas = numeroTemporadas;
    }

    public getCriadores(): string[] {
        return this.criadores;
    }

    public setCriadores(criadores: string[]): void {
        this.criadores = criadores;
    }

    public getTemporadas(): Temporada[] {
        return this.temporadas;
    }

    public setTemporadas(temporadas: Temporada[]): void {
        this.temporadas = temporadas;
    }

    public listarTemporada(): Temporada[] {
        return this.temporadas;
    }
}

export default Serie;