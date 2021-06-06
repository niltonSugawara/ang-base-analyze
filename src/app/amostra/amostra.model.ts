import { Cliente } from "../cliente/cliente.model";
import { Status } from "../status/model";
import { TipoAmostra } from "../tipo-amostra/model";

export interface Amostra {
  id: number,
  descricao: string,
  nome: string,
  tipoAmostra: TipoAmostra,
  cliente: Cliente,
  status: Status
}
