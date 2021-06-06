import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { formatarDataDDMMYYYY } from 'src/app/_util/util';
import { Orcamento } from 'src/app/orcamento/orcamento.model';
import { OrcamentoService } from 'src/app/orcamento/orcamento.service';

@Component({
  selector: 'app-orcamento-listar',
  templateUrl: './orcamento-listar.component.html',
  styleUrls: ['./orcamento-listar.component.scss'],
})
export class OrcamentoListarComponent implements OnInit {
  orcamentos$: Observable<Orcamento[]>;

  colunasTabela = [
    'id',
    'data',
    'nome',
    'cliente',
    'descricao',
    'valor',
    'acoes',
  ];

  constructor(
    private orcamentoService: OrcamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarOrcamentos();
  }

  listarOrcamentos() {
    this.orcamentos$ = this.orcamentoService.listar();
  }

  editar(orcamento: Orcamento) {
    this.router.navigateByUrl(`/orcamentos/editar/${orcamento.id}`);
  }

  excluir(orcamento: Orcamento) {
    if (confirm('Confirma deletar orcamento com id ' + orcamento.id)) {
      this.orcamentoService.deletar(orcamento).subscribe((orcamento) => {
        this.listarOrcamentos();
        alert('Deletado com sucesso');
      });
    }
  }

  formatarData(data: string): string {
    return formatarDataDDMMYYYY(data);
  }
}
