import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { Amostra } from "./amostra.model";

@Injectable({
  providedIn: 'root'
})
export class AmostraService {

  private endpoint = 'amostras';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<Amostra[]>{
    return this.httpClient.get<Amostra[]>(`${environment.apiURL}/${this.endpoint}`);
  }

  cadastrar(amostra: Amostra ): Observable<Amostra> {
    return this.httpClient.post<Amostra>(`${environment.apiURL}/${this.endpoint}`, amostra);
  }

  pesquisarPorID(id: number): Observable<Amostra> {
    return this.httpClient.get<Amostra>(`${environment.apiURL}/${this.endpoint}/${id}`) ;
  }

  atualizar(amostra: Amostra): Observable<Amostra> {
    return this.httpClient.put<Amostra>(`${environment.apiURL}/${this.endpoint}/${amostra.id}`,amostra);
  }

  deletar(amostra: Amostra): Observable<{}> {
    return this.httpClient.delete(`${environment.apiURL}/${this.endpoint}/${amostra.id}`);
  }
}
