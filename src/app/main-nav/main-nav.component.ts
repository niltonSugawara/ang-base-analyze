import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AutenticacaoService } from '../autenticacao/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  estaLogado$: Observable<boolean>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {
    this.estaLogado$ = autenticacaoService.estaLogado();
  }

  sair() {
    this.autenticacaoService.logout();
    this.router.navigateByUrl('/login');
  }
}
