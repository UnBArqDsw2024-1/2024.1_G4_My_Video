"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
const midia_1 = require("./midia");
class Filme extends midia_1.Midia {
    constructor(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco, diretor, roteirista) {
        super(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco);
        this.diretor = diretor;
        this.roteirista = roteirista;
    }
    printarInformacoes() {
        console.log(`Filme: ${this.titulo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Ano de Lançamento: ${this.anoLancamento}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Classificação: ${this.classificacao}`);
        console.log(`Elenco: ${this.elenco.join(', ')}`);
        console.log(`Diretor: ${this.diretor}`);
        console.log(`Roteirista: ${this.roteirista}`);
    }
}
exports.Filme = Filme;
