"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
const midia_1 = require("./midia");
class Serie extends midia_1.Midia {
    constructor(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco) {
        super(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco);
        this.numeroTemporadas = 0;
        this.temporadas = [];
        this.criadores = [];
    }
    // Métodos getter e setter
    getNumeroTemporadas() {
        return this.numeroTemporadas;
    }
    setNumeroTemporadas(numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    }
    getTemporadas() {
        return this.temporadas;
    }
    setTemporadas(temporadas) {
        this.temporadas = temporadas;
    }
    getCriadores() {
        return this.criadores;
    }
    setCriadores(criadores) {
        this.criadores = criadores;
    }
    // Método para listar temporadas
    listarTemporadas() {
        return this.temporadas;
    }
    // Método para adicionar uma temporada
    adicionarTemporada(temporada) {
        this.temporadas.push(temporada);
        this.numeroTemporadas = this.temporadas.length;
    }
    // Método para imprimir informações da série
    printarInformacoes() {
        console.log(`Série: ${this.titulo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Ano de Lançamento: ${this.anoLancamento}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Classificação: ${this.classificacao}`);
        console.log(`Número de Temporadas: ${this.numeroTemporadas}`);
        console.log(`Elenco: ${this.elenco ? this.elenco.join(', ') : 'N/A'}`);
        for (const temporada of this.temporadas) {
            temporada.printarInformacoes();
        }
    }
}
exports.Serie = Serie;
