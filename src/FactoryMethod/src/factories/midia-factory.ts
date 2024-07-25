import { Midia } from '../models/midia';

export interface MidiaFactory {
    criarMidia(
        titulo: string,
        descricao: string,
        anoLancamento: number,
        duracao: number,
        genero: string,
        classificacao: string,
        elenco: string[],
        diretor?: string,
        roteirista?: string
    ): Midia;
}
