import { Filme } from '../filme/filme';
import { Serie } from '../serie/serie';

export interface MyVideo {
    criarFilme(titulo: string, descricao: string, ano: number, genero: string): Filme;
    criarSerie(titulo: string, descricao: string, temporada: number, genero: string): Serie;
}