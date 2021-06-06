import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { Status } from "./model";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private endpoint = 'status';

  constructor(private httpClient: HttpClient) { }

  listar():Observable<Status[]>{
    return this.httpClient.get<Status[]>(`${environment.apiURL}/${this.endpoint}`);
  }

  pesquisarPorID(id: number): Observable<Status> {
    return this.httpClient.get<Status>(`${environment.apiURL}/${this.endpoint}/${id}`) ;
  }


}
