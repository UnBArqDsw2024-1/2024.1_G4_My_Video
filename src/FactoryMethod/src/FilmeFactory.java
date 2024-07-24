import java.util.ArrayList;

public class FilmeFactory implements MidiaFactory {
    @Override
    public Midia criarMidia(String titulo, String descricao, int anoLancamento, int duracao, String genero, String classificacao, ArrayList<String> elenco) {
        return new Filme(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco);
    }
}
