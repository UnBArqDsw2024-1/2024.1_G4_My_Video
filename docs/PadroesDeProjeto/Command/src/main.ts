import { IndexarConteudoComando } from "./commands/IndexarConteudoComando";
import { SalvarEpsodioComando } from "./commands/SalvarEpsodioComando";
import { SalvarFilmeComando } from "./commands/SalvarFilmeComando";
import { Conteudo } from "./conteudo/Conteudo";
import { Filme } from "./filme/Filme";
import { conteudos, DadosConteudo } from "./fixtures/fixtures";
import { Serie } from "./serie/Serie";

// Example usage
export class ComandoExamplo {
  public static adicionarConteudo(conteudo: DadosConteudo): void {
    // Create devices
    const serie: Serie = new Serie();
    const filme: Filme = new Filme();

    const salvarEpsodioComando = new SalvarEpsodioComando(serie);
    const indexarConteudoSerieComando = new IndexarConteudoComando(serie);

    const salvarFilmeComando = new SalvarFilmeComando(filme);
    const indexarConteudoFilmeComando = new IndexarConteudoComando(filme);

    const conteudo = new Conteudo();

    // Set and execute commands
    conteudo.setCommand(salvarEpsodioComando);
    conteudo.executarComando(); // Outputs: Epsodio salvo.
  }
}

conteudos.forEach((conteudo) => {
  ComandoExamplo.adicionarConteudo();
});
