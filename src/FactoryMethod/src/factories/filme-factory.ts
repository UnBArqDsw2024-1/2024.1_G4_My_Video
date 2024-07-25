import { MidiaFactory } from './midia-factory';
import { Filme } from '../models/filme';
import { Midia } from '../models/midia';

export class FilmeFactory implements MidiaFactory {
    public criarMidia(
        titulo: string,
        descricao: string,
        anoLancamento: number,
        duracao: number,
        genero: string,
        classificacao: string,
        elenco: string[],
        diretor: string,
        roteirista: string
    ): Midia {
        return new Filme(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco, diretor, roteirista);
    }
}
