import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Cliente } from "./cliente.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = 'http://localhost:3000';
  private endpoint = 'clientes';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}/${this.endpoint}`);
  }

  cadastrar(cliente: Cliente ): Observable<Cliente> {
    return this.httpClient.post<Cliente>(`${this.baseURL}/${this.endpoint}`, cliente);
  }

  pesquisarPorID(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseURL}/${this.endpoint}/${id}`) ;
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.baseURL}/${this.endpoint}/${cliente.id}`,cliente);
  }

  deletar(cliente: Cliente): Observable<{}> {
    return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${cliente.id}`);
  }
}
