import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { TipoAmostra } from "../../model";
import { TipoAmostraService } from "../../service";

@Component({
  selector: 'app-TipoAmostra-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class TipoAmostraListarComponent implements OnInit {
  tipoAmostras$: Observable<TipoAmostra[]>;

  colunasTabela = [
    'id',
    'tipoAmostra',
    "acoes"
  ];

  constructor(private tipoAmostraService: TipoAmostraService, private router: Router) {}

  ngOnInit(): void {
    this.listarTipoAmostras();
  }

  listarTipoAmostras() {
    this.tipoAmostras$ = this.tipoAmostraService.listar();
  }

  editar(tipoAmostra: TipoAmostra) {
    this.router.navigateByUrl(`/tipoAmostras/editar/${tipoAmostra.id}`);
  }

  excluir(tipoAmostra: TipoAmostra) {
    if (confirm('Confirma deletar tipoAmostra com id ' + tipoAmostra.id)) {
      this.tipoAmostraService.deletar(tipoAmostra).subscribe((tipoAmostra) => {
        this.listarTipoAmostras();
        alert('Deletado com sucesso');
      });
    }
  }
}
