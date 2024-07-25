class Midia {
    private titulo: string = '';
    private descricao: string = '';
    private anoLancamento: number = 0;
    private duracao: number = 0;
    private genero: string = '';
    private classificacao: string = '';
    private elenco: string[] = [];

    // Getters and Setters
    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getAnoLancamento(): number {
        return this.anoLancamento;
    }

    public setAnoLancamento(anoLancamento: number): void {
        this.anoLancamento = anoLancamento;
    }

    public getDuracao(): number {
        return this.duracao;
    }

    public setDuracao(duracao: number): void {
        this.duracao = duracao;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public getClassificacao(): string {
        return this.classificacao;
    }

    public setClassificacao(classificacao: string): void {
        this.classificacao = classificacao;
    }

    public getElenco(): string[] {
        return this.elenco;
    }

    public setElenco(elenco: string[]): void {
        this.elenco = elenco;
    }
}

export default Midia;