import java.util.ArrayList;

public abstract class Midia {
    protected String titulo;
    protected String descricao;
    protected int anoLancamento;
    protected int duracao;
    protected String genero;
    protected String classificacao;
    protected ArrayList<String> elenco;

    public Midia(String titulo, String descricao, int anoLancamento, int duracao, String genero, String classificacao, ArrayList<String> elenco) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.anoLancamento = anoLancamento;
        this.duracao = duracao;
        this.genero = genero;
        this.classificacao = classificacao;
        this.elenco = elenco != null ? elenco : new ArrayList<>();
    }

    // Construtor e métodos abstratos ou concretos, conforme necessário
}
