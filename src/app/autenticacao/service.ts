import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface RespostaAutenticacao {
  token: any;
  usuario: any;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  logado = new BehaviorSubject<boolean>(false);

  constructor() {
    if (localStorage.getItem('token')) {
      this.logado.next(true);
      return;
    }
    this.logado.next(false);
  }

  login(email: string, senha: string) {
    localStorage.setItem('token', email);
    this.logado.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.logado.next(false);
  }

  estaLogado(): Observable<boolean> {

    return this.logado.asObservable();
  }
}
