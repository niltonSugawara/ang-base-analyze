import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { NormaTecnica } from "../../model";
import { NormaTecnicaService } from "../../service";

@Component({
  selector: 'app-norma-tecnica-listar-component',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class NormaTecnicaListarComponent implements OnInit {
  normas$: Observable<NormaTecnica[]>;

  colunasTabela = [
    'id',
    'nome',
    "acoes"
  ];

  constructor(private normaTecnicaService: NormaTecnicaService, private router: Router) {}

  ngOnInit(): void {
    this.listarNormaTecnicas();
  }

  listarNormaTecnicas() {
    this.normas$ = this.normaTecnicaService.listar();
  }

  editar(normaTecnica: NormaTecnica) {
    this.router.navigateByUrl(`/normas-tecnicas/editar/${normaTecnica.id}`);
  }

  excluir(normaTecnica: NormaTecnica) {
    if (confirm('Confirma deletar norma técnica com id ' + normaTecnica.id)) {
      this.normaTecnicaService.deletar(normaTecnica).subscribe((normaTecnica) => {
        this.listarNormaTecnicas();
        alert('Deletado com sucesso');
      });
    }
  }
}
