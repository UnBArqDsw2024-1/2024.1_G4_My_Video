"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Episodio = void 0;
class Episodio {
    constructor(titulo, numero, duracao, descricao) {
        this.titulo = titulo;
        this.numero = numero;
        this.duracao = duracao;
        this.descricao = descricao;
    }
    // Métodos getter e setter
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getDuracao() {
        return this.duracao;
    }
    setDuracao(duracao) {
        this.duracao = duracao;
    }
    getDescricao() {
        return this.descricao;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    // Método para imprimir informações do episódio
    printarInformacoes() {
        console.log(`Episódio ${this.numero}: ${this.titulo} (${this.duracao} minutos)`);
        console.log(`Descrição: ${this.descricao}`);
    }
}
exports.Episodio = Episodio;
