import java.util.ArrayList;

public class SerieFactory implements MidiaFactory {
    @Override
    public Midia criarMidia(String titulo, String descricao, int anoLancamento, int duracao, String genero, String classificacao, ArrayList<String> elenco) {
        return new Serie(titulo, descricao, anoLancamento, duracao, genero, classificacao, elenco);
    }
}
