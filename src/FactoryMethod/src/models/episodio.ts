export class Episodio {
    private titulo: string;
    private numero: number;
    private duracao: number;
    private descricao: string;

    constructor(titulo: string, numero: number, duracao: number, descricao: string) {
        this.titulo = titulo;
        this.numero = numero;
        this.duracao = duracao;
        this.descricao = descricao;
    }

    // Métodos getter e setter
    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getDuracao(): number {
        return this.duracao;
    }

    public setDuracao(duracao: number): void {
        this.duracao = duracao;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    // Método para imprimir informações do episódio
    public printarInformacoes(): void {
        console.log(`Episódio ${this.numero}: ${this.titulo} (${this.duracao} minutos)`);
        console.log(`Descrição: ${this.descricao}`);
    }
}