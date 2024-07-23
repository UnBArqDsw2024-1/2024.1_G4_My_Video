import { Filme } from "../../../docs/PadroesDeProjeto/AbstractFactory/src/filme/filme";
import { Serie } from "../../../docs/PadroesDeProjeto/AbstractFactory/src/serie/serie";
import { MobileFilme } from "../../../docs/PadroesDeProjeto/AbstractFactory/src/filme/mobile-filme";
import { MobileSerie } from "../../../docs/PadroesDeProjeto/AbstractFactory/src/serie/mobile-serie";
import { MyVideo } from "./my-video";

export class PlataformaMobileApp implements MyVideo {
    criarFilme(titulo: string, descricao: string, ano: number, genero: string) {
        return new MobileFilme(titulo, descricao, ano, genero);
    }

    criarSerie(titulo: string, descricao: string, temporada: number, genero: string) {
        return new MobileSerie(titulo, descricao, temporada, genero);
    }
}