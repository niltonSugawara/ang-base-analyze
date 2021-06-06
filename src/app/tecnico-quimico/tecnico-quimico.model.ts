import { OrdemServico } from "../ordem-servico/model";

export interface TecnicoQuimico{
  id: number,
  nome: string,
  crq: number,
  ordemServico: OrdemServico
}
