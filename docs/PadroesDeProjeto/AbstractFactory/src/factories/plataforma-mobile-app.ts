import { Filme } from "../filme/filme";
import { Serie } from "../serie/serie";
import { MobileFilme } from "../filme/mobile-filme";
import { MobileSerie } from "../serie/mobile-serie";
import { MyVideo } from "./my-video";

export class PlataformaMobileApp implements MyVideo {
    criarFilme(titulo: string, descricao: string, ano: number, genero: string) {
        return new MobileFilme(titulo, descricao, ano, genero);
    }

    criarSerie(titulo: string, descricao: string, temporada: number, genero: string) {
        return new MobileSerie(titulo, descricao, temporada, genero);
    }
}