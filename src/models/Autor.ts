import { randomUUID } from "node:crypto";
type Tautor = {
  nome: string;
  idade: number;
};

export default class Autor {
  readonly id: string;
  public nome: string;
  public idade: number;

  constructor(autor: Tautor) {
    this.id = this.gerarId();
    this.nome = autor.nome;
    this.idade = autor.idade;
  }

  private gerarId(): string {
    return randomUUID();
  }
}
