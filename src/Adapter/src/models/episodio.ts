class Episodio {
    private titulo: string = '';
    private numero: number = 0 ;
    private duracao: number = 0;
    private descricao: string = '';

    // Getters and Setters
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
}

export default Episodio;