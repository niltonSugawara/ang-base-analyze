import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { Amostra } from "../../amostra.model";
import { AmostraService } from "../../amostra.service";

@Component({
  selector: 'app-amostra-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class AmostraListarComponent implements OnInit {
  amostras$: Observable<Amostra[]>;

  colunasTabela = [
    'id',
    "acoes"
  ];

  constructor(private amostraService: AmostraService, private router: Router) {}

  ngOnInit(): void {
    this.listarAmostras();
  }

  listarAmostras() {
    this.amostras$ = this.amostraService.listar();
  }

  editar(amostra: Amostra) {
    this.router.navigateByUrl(`/amostras/editar/${amostra.id}`);
  }

  excluir(amostra: Amostra) {
    if (confirm('Confirma deletar amostra com id ' + amostra.id)) {
      this.amostraService.deletar(amostra).subscribe((amostra) => {
        this.listarAmostras();
        alert('Deletado com sucesso');
      });
    }
  }
}
