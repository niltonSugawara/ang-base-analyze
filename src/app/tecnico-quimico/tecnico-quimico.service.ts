import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { TecnicoQuimico } from "./tecnico-quimico.model";

@Injectable({
  providedIn: 'root'
})
export class TecnicoQuimicoService {

  private endpoint = 'tecnicos-quimicos';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<TecnicoQuimico[]>{
    return this.httpClient.get<TecnicoQuimico[]>(`${environment.apiURL}/${this.endpoint}`);
  }

  cadastrar(tecnico: TecnicoQuimico ): Observable<TecnicoQuimico> {
    return this.httpClient.post<TecnicoQuimico>(`${environment.apiURL}/${this.endpoint}`, tecnico);
  }

  pesquisarPorID(id: number): Observable<TecnicoQuimico> {
    return this.httpClient.get<TecnicoQuimico>(`${environment.apiURL}/${this.endpoint}/${id}`) ;
  }

  atualizar(tecnico: TecnicoQuimico): Observable<TecnicoQuimico> {
    return this.httpClient.put<TecnicoQuimico>(`${environment.apiURL}/${this.endpoint}/${tecnico.id}`,tecnico);
  }

  deletar(tecnico: TecnicoQuimico): Observable<{}> {
    return this.httpClient.delete(`${environment.apiURL}/${this.endpoint}/${tecnico.id}`);
  }
}
