import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { OrdemServico } from "./model";

@Injectable({
  providedIn: 'root',
})
export class OrdemServicoService {
  private endpoint = 'ordens-servicos';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<OrdemServico[]> {
    return this.httpClient.get<OrdemServico[]>(
      `${environment.apiURL}/${this.endpoint}`
    );
  }

  cadastrar(OrdemServico: OrdemServico): Observable<OrdemServico> {
    return this.httpClient.post<OrdemServico>(
      `${environment.apiURL}/${this.endpoint}`,
      OrdemServico
    );
  }

  pesquisarPorID(id: number): Observable<OrdemServico> {
    return this.httpClient.get<OrdemServico>(
      `${environment.apiURL}/${this.endpoint}/${id}`
    );
  }

  atualizar(OrdemServico: OrdemServico): Observable<OrdemServico> {
    return this.httpClient.put<OrdemServico>(
      `${environment.apiURL}/${this.endpoint}/${OrdemServico.id}`,
      OrdemServico
    );
  }

  deletar(OrdemServico: OrdemServico): Observable<{}> {
    return this.httpClient.delete(
      `${environment.apiURL}/${this.endpoint}/${OrdemServico.id}`
    );
  }
}
