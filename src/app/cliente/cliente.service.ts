import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { Cliente } from "./cliente.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private endpoint = 'clientes';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${environment.apiURL}/${this.endpoint}`);
  }

  cadastrar(cliente: Cliente ): Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${environment.apiURL}/${this.endpoint}`, cliente);
  }

  pesquisarPorID(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${environment.apiURL}/${this.endpoint}/${id}`) ;
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${environment.apiURL}/${this.endpoint}/${cliente.id}`,cliente);
  }

  deletar(cliente: Cliente): Observable<{}> {
    return this.httpClient.delete(`${environment.apiURL}/${this.endpoint}/${cliente.id}`);
  }
}
