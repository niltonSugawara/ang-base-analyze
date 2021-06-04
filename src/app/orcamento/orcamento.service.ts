import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { Orcamento } from "./orcamento.model";

@Injectable({
  providedIn: 'root',
})
export class OrcamentoService {
  private endpoint = 'orcamentos';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Orcamento[]> {
    return this.httpClient.get<Orcamento[]>(
      `${environment.apiURL}/${this.endpoint}`
    );
  }

  cadastrar(orcamento: Orcamento): Observable<Orcamento> {
    return this.httpClient.post<Orcamento>(
      `${environment.apiURL}/${this.endpoint}`,
      orcamento
    );
  }

  pesquisarPorID(id: number): Observable<Orcamento> {
    return this.httpClient.get<Orcamento>(
      `${environment.apiURL}/${this.endpoint}/${id}`
    );
  }

  atualizar(orcamento: Orcamento): Observable<Orcamento> {
    return this.httpClient.put<Orcamento>(
      `${environment.apiURL}/${this.endpoint}/${orcamento.id}`,
      orcamento
    );
  }

  deletar(orcamento: Orcamento): Observable<{}> {
    return this.httpClient.delete(
      `${environment.apiURL}/${this.endpoint}/${orcamento.id}`
    );
  }
}
