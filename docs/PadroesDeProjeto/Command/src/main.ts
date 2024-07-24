import { IndexarConteudoComando } from "./commands/IndexarConteudoComando";
import { SalvarEpsodioComando } from "./commands/SalvarEpsodioComando";
import { SalvarFilmeComando } from "./commands/SalvarFilmeComando";
import { Conteudo } from "./conteudo/Conteudo";
import { DadosFilme, Filme } from "./filme/Filme";
import { filmes, series } from "./fixtures/fixtures";
import { DadosSerie, Serie } from "./serie/Serie";

export class ComandoExemplo {
  public static adicionarConteudo(
    tipo: "Filme" | "Serie",
    conteudo: DadosFilme | DadosSerie
  ): void {
    const c = new Conteudo();

    if (this.ehFilme(tipo, conteudo)) {
      const filme: Filme = new Filme(conteudo);
      const salvarFilmeComando = new SalvarFilmeComando(filme);
      c.setCommand(salvarFilmeComando);
      c.executarComando();

      const indexarConteudoFilmeComando = new IndexarConteudoComando(filme);
      c.setCommand(indexarConteudoFilmeComando);
      c.executarComando();

      return;
    } else if (this.ehSerie(tipo, conteudo)) {
      const serie: Serie = new Serie(conteudo);
      const salvarEpsodioComando = new SalvarEpsodioComando(serie);
      c.setCommand(salvarEpsodioComando);
      c.executarComando();

      const indexarConteudoSerieComando = new IndexarConteudoComando(serie);
      c.setCommand(indexarConteudoSerieComando);
      c.executarComando();

      return;
    }

    throw new Error(`${tipo} não é um tipo de conteudo valido.`);
  }

  private static ehFilme(
    tipo: "Filme" | "Serie",
    conteudo: DadosFilme | DadosSerie
  ): conteudo is DadosFilme {
    return tipo === "Filme" && "dataLancamento" in conteudo;
  }

  private static ehSerie(
    tipo: "Filme" | "Serie",
    conteudo: DadosFilme | DadosSerie
  ): conteudo is DadosSerie {
    return tipo === "Serie" && "numeroEpsodio" in conteudo;
  }
}

filmes.forEach((filme) => {
  ComandoExemplo.adicionarConteudo("Filme", filme);
});

series.forEach((serie) => {
  ComandoExemplo.adicionarConteudo("Serie", serie);
});
