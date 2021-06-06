import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { formatarDataDDMMYYYY } from 'src/app/_util/util';

import { OrdemServico } from '../../model';
import { OrdemServicoService } from '../../service';

@Component({
  selector: 'app-norma-tecnica-listar-component',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class OrdemServicoListarComponent implements OnInit {
  ordens$: Observable<OrdemServico[]>;

  colunasTabela = ['id', 'nome', 'data', 'tecnico', 'acoes'];

  constructor(
    private ordemServicoService: OrdemServicoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarOrdemServicos();
  }

  listarOrdemServicos() {
    this.ordens$ = this.ordemServicoService.listar();
  }

  editar(ordemServico: OrdemServico) {
    this.router.navigateByUrl(`/ordens-servicos/editar/${ordemServico.id}`);
  }

  excluir(ordemServico: OrdemServico) {
    if (confirm('Confirma deletar ordem serviço com id ' + ordemServico.id)) {
      this.ordemServicoService
        .deletar(ordemServico)
        .subscribe((ordemServico) => {
          this.listarOrdemServicos();
          alert('Deletado com sucesso');
        });
    }
  }

  formatarData(data: string): string {
    return formatarDataDDMMYYYY(data);
  }
}
