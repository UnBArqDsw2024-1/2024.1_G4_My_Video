"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temporada = void 0;
class Temporada {
    constructor(numero) {
        this.numero = numero;
        this.episodios = [];
    }
    // Métodos getter e setter
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getEpisodios() {
        return this.episodios;
    }
    setEpisodios(episodios) {
        this.episodios = episodios;
    }
    // Método para listar episódios
    listarEpisodios() {
        return this.episodios;
    }
    // Método para adicionar um episódio
    adicionarEpisodio(episodio) {
        this.episodios.push(episodio);
    }
    // Método para imprimir informações da temporada
    printarInformacoes() {
        console.log(`---- Temporada ${this.numero} ----`);
        for (const episodio of this.episodios) {
            episodio.printarInformacoes();
        }
    }
}
exports.Temporada = Temporada;
