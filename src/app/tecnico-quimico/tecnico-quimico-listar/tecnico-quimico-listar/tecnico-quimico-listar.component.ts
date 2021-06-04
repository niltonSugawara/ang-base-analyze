import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { TecnicoQuimico } from "../../tecnico-quimico.model";
import { TecnicoQuimicoService } from "../../tecnico-quimico.service";

@Component({
  selector: 'app-tecnico-quimico-listar',
  templateUrl: './tecnico-quimico-listar.component.html',
  styleUrls: ['./tecnico-quimico-listar.component.scss'],
})
export class TecnicoQuimicoListarComponent implements OnInit {
  tecnicos$: Observable<TecnicoQuimico[]>;

  colunasTabela = ['acoes'];

  constructor(
    private tecnicoQuimicoService: TecnicoQuimicoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.tecnicos$ = this.tecnicoQuimicoService.listar();
  }

  editar(tecnicoQuimico: TecnicoQuimico) {
    this.router.navigateByUrl(`/tecnicos-quimicos/editar/${tecnicoQuimico.id}`);
  }

  excluir(tecnicoQuimico: TecnicoQuimico) {
    if (
      confirm('Confirma deletar técnico quimico com id ' + tecnicoQuimico.id)
    ) {
      this.tecnicoQuimicoService
        .deletar(tecnicoQuimico)
        .subscribe((tecnicoQuimico) => {
          this.listar();
          alert('Deletado com sucesso');
        });
    }
  }
}
