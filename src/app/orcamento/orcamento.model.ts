import { Cliente } from "../cliente/cliente.model";

export interface Orcamento {
  id: string,
  data: Date,
  valor: number,
  descricao: string,
  nome: string,
  cliente: Cliente
}
