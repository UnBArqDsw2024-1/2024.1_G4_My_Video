import java.util.ArrayList;

public class Filme extends Midia {
    private String diretor;
    private String roteirista;

    public Filme(String titulo, String descricao, int anoLancamento, int duracao, String genero, String classificacao, ArrayList<String> elenco) {
        super(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco);
    }

    public void printarInformacoes() {
        System.out.println("Filme: " + titulo);
        System.out.println("Descrição: " + descricao);
        System.out.println("Ano de Lançamento: " + anoLancamento);
        System.out.println("Gênero: " + genero);
        System.out.println("Classificação: " + classificacao);
        System.out.println("Elenco: " + (elenco != null ? String.join(", ", elenco) : "N/A"));
    }
}
