import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { TipoAmostra } from "./model";

@Injectable({
  providedIn: 'root'
})
export class TipoAmostraService {

  private endpoint = 'tipoAmostras';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<TipoAmostra[]>{
    return this.httpClient.get<TipoAmostra[]>(`${environment.apiURL}/${this.endpoint}`);
  }

  cadastrar(amostra: TipoAmostra ): Observable<TipoAmostra> {
    return this.httpClient.post<TipoAmostra>(`${environment.apiURL}/${this.endpoint}`, amostra);
  }

  pesquisarPorID(id: number): Observable<TipoAmostra> {
    return this.httpClient.get<TipoAmostra>(`${environment.apiURL}/${this.endpoint}/${id}`) ;
  }

  atualizar(amostra: TipoAmostra): Observable<TipoAmostra> {
    return this.httpClient.put<TipoAmostra>(`${environment.apiURL}/${this.endpoint}/${amostra.id}`,amostra);
  }

  deletar(amostra: TipoAmostra): Observable<{}> {
    return this.httpClient.delete(`${environment.apiURL}/${this.endpoint}/${amostra.id}`);
  }
}
