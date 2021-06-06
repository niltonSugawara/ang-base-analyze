import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { Servico } from "./model";

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private endpoint = 'servicos';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<Servico[]>{
    return this.httpClient.get<Servico[]>(`${environment.apiURL}/${this.endpoint}`);
  }

  pesquisarPorID(id: number): Observable<Servico> {
    return this.httpClient.get<Servico>(`${environment.apiURL}/${this.endpoint}/${id}`) ;
  }

}
