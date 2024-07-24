import { MidiaFactory } from './midia-factory';
import { Midia } from '../models/midia';
import { Serie } from '../models/serie';

export class SerieFactory implements MidiaFactory {
    public criarMidia(
        titulo: string, 
        descricao: string, 
        anoLancamento: number, 
        duracao: number, 
        genero: string, 
        classificacao: string, 
        elenco: string[]
    ): Midia {
        return new Serie(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco);
    }
}