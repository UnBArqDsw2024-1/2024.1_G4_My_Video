"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerieFactory = void 0;
const serie_1 = require("../models/serie");
class SerieFactory {
    criarMidia(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco) {
        return new serie_1.Serie(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco);
    }
}
exports.SerieFactory = SerieFactory;
