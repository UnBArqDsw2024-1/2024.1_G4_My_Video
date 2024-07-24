import { Filme } from "../filme/Filme";
import { Comando } from "./Comando";

// Concrete command for saving a movie content
export class SalvarFilmeComando implements Comando {
  private filme: Filme;
  constructor(filme: Filme) {
    this.filme = filme;
  }

  public salvarComando(filme: Filme) {
    this.filme = filme;
  }

  executar(): void {
    this.filme.salvarFilme();
  }
}
