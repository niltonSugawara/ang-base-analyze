import { Servico } from "../servico/model";
import { TecnicoQuimico } from "../tecnico-quimico/tecnico-quimico.model";

export interface OrdemServico {
 id: number,
 nome: string,
 data: Date,
 tecnico: TecnicoQuimico
 servico: Servico
}
