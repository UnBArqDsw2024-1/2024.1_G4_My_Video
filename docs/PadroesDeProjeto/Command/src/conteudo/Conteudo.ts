import { Comando } from "../commands/Comando";

export class Conteudo {
  private comando: Comando | undefined;

  public setCommand(comando: Comando): void {
    this.comando = comando;
  }

  public executarComando(): void {
    this.comando?.executar();
  }
}
