import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { TecnicoQuimico } from "./tecnico-quimico.model";

@Injectable({
  providedIn: 'root'
})
export class TecnicoQuimicoService {

  private baseURL = 'http://localhost:3000';
  private endpoint = 'tecnicos-quimicos';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<TecnicoQuimico[]>{
    return this.httpClient.get<TecnicoQuimico[]>(`${this.baseURL}/${this.endpoint}`);
  }

  cadastrar(tecnico: TecnicoQuimico ): Observable<TecnicoQuimico> {
    return this.httpClient.post<TecnicoQuimico>(`${this.baseURL}/${this.endpoint}`, tecnico);
  }

  pesquisarPorID(id: number): Observable<TecnicoQuimico> {
    return this.httpClient.get<TecnicoQuimico>(`${this.baseURL}/${this.endpoint}/${id}`) ;
  }

  atualizar(tecnico: TecnicoQuimico): Observable<TecnicoQuimico> {
    return this.httpClient.put<TecnicoQuimico>(`${this.baseURL}/${this.endpoint}/${tecnico.id}`,tecnico);
  }

  deletar(tecnico: TecnicoQuimico): Observable<{}> {
    return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${tecnico.id}`);
  }
}
