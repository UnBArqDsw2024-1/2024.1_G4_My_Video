"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Midia = void 0;
class Midia {
    constructor(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.anoLancamento = anoLancamento;
        this.duracao = duracao;
        this.genero = genero;
        this.classificacao = classificacao;
        this.elenco = elenco !== null && elenco !== void 0 ? elenco : [];
    }
}
exports.Midia = Midia;
