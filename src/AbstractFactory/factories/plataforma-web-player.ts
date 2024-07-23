import { Filme } from "../../../docs/PadroesDeProjeto/AbstractFactory/src/filme/filme";
import { Serie } from "../../../docs/PadroesDeProjeto/AbstractFactory/src/serie/serie";
import { WebFilme } from "../../../docs/PadroesDeProjeto/AbstractFactory/src/filme/web-filme";
import { WebSerie } from "../../../docs/PadroesDeProjeto/AbstractFactory/src/serie/web-serie";
import { MyVideo } from "./my-video";

export class PlataformaWebPlayer implements MyVideo {
    criarFilme(titulo: string, descricao: string, ano: number, genero: string) {
        return new WebFilme(titulo, descricao, ano, genero);
    }

    criarSerie(titulo: string, descricao: string, temporada: number, genero: string) {
        return new WebSerie(titulo, descricao, temporada, genero);
    }
}