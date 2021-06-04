import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { NormaTecnica } from "./model";

@Injectable({
  providedIn: 'root',
})
export class NormaTecnicaService {
  private endpoint = 'normas-tecnicas';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<NormaTecnica[]> {
    return this.httpClient.get<NormaTecnica[]>(
      `${environment.apiURL}/${this.endpoint}`
    );
  }

  cadastrar(NormaTecnica: NormaTecnica): Observable<NormaTecnica> {
    return this.httpClient.post<NormaTecnica>(
      `${environment.apiURL}/${this.endpoint}`,
      NormaTecnica
    );
  }

  pesquisarPorID(id: number): Observable<NormaTecnica> {
    return this.httpClient.get<NormaTecnica>(
      `${environment.apiURL}/${this.endpoint}/${id}`
    );
  }

  atualizar(NormaTecnica: NormaTecnica): Observable<NormaTecnica> {
    return this.httpClient.put<NormaTecnica>(
      `${environment.apiURL}/${this.endpoint}/${NormaTecnica.id}`,
      NormaTecnica
    );
  }

  deletar(NormaTecnica: NormaTecnica): Observable<{}> {
    return this.httpClient.delete(
      `${environment.apiURL}/${this.endpoint}/${NormaTecnica.id}`
    );
  }
}
