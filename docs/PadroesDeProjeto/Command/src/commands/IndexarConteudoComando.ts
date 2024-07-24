import { Midia } from "../midia/midia";
import { Comando } from "./Comando";

export class IndexarConteudoComando implements Comando {
  private midia: Midia;
  constructor(midia: Midia) {
    this.midia = midia;
  }

  public indexarConteudo(midia: Midia) {
    this.midia = midia;
  }

  executar(): void {
    this.midia.indexarConteudo();
  }
}
