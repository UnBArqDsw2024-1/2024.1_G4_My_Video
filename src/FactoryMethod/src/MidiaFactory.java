
import java.util.ArrayList;

public interface MidiaFactory {
    Midia criarMidia(String titulo, String descricao, int anoLancamento, int duracao, String genero, String classificacao, ArrayList<String> elenco);
}
