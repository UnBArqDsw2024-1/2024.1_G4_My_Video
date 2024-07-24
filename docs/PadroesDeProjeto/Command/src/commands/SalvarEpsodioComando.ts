import { Serie } from "../serie/Serie";
import { Comando } from "./Comando";

export class SalvarEpsodioComando implements Comando {
  private serie: Serie;
  constructor(serie: Serie) {
    this.serie = serie;
  }

  public salvarComando(serie: Serie) {
    this.serie = serie;
  }

  executar(): void {
    this.serie.salvarEpsodio();
  }
}
