"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmeFactory = void 0;
const filme_1 = require("../models/filme");
class FilmeFactory {
    criarMidia(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco, diretor, roteirista) {
        return new filme_1.Filme(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco, diretor, roteirista);
    }
}
exports.FilmeFactory = FilmeFactory;
