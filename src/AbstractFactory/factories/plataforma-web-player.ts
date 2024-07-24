import { Filme } from "../filme/filme";
import { Serie } from "../serie/serie";
import { WebFilme } from "../filme/web-filme";
import { WebSerie } from "../serie/web-serie";
import { MyVideo } from "./my-video";

export class PlataformaWebPlayer implements MyVideo {
    criarFilme(titulo: string, descricao: string, ano: number, genero: string) {
        return new WebFilme(titulo, descricao, ano, genero);
    }

    criarSerie(titulo: string, descricao: string, temporada: number, genero: string) {
        return new WebSerie(titulo, descricao, temporada, genero);
    }
}