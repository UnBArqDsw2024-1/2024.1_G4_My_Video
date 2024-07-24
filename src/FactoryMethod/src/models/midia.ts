export abstract class Midia {
    protected titulo: string;
    protected descricao: string;
    protected anoLancamento: number;
    protected duracao: number;
    protected genero: string;
    protected classificacao: string;
    protected elenco: string[];

    constructor(titulo: string, descricao: string, anoLancamento: number, duracao: number, genero: string, classificacao: string, elenco: string[]) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.anoLancamento = anoLancamento;
        this.duracao = duracao;
        this.genero = genero;
        this.classificacao = classificacao;
        this.elenco = elenco ?? [];
    }
}