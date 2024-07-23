import { Filme } from '../../../docs/PadroesDeProjeto/AbstractFactory/src/filme/filme';
import { Serie } from '../../../docs/PadroesDeProjeto/AbstractFactory/src/serie/serie';

export interface MyVideo {
    criarFilme(titulo: string, descricao: string, ano: number, genero: string): Filme;
    criarSerie(titulo: string, descricao: string, temporada: number, genero: string): Serie;
}