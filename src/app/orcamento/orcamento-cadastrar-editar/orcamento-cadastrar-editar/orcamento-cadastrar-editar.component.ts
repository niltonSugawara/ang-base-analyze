import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/cliente/cliente.model';
import { environment } from 'src/environments/environment';

import { Orcamento } from '../../orcamento.model';
import { OrcamentoService } from '../../orcamento.service';

@Component({
  selector: 'app-orcamento-cadastrar-editar',
  templateUrl: './orcamento-cadastrar-editar.component.html',
  styleUrls: ['./orcamento-cadastrar-editar.component.scss'],
})
export class OrcamentoCadastrarEditarComponent implements OnInit {
  formGroup: FormGroup;
  orcamento: Orcamento;
  cliente: Cliente;
  httpClient: HttpClient;

  constructor(
    private formBuilder: FormBuilder,
    private orcamentoService: OrcamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var dataAtual = new Date();
    this.orcamento = this.activatedRoute.snapshot.data['orcamento'];

    this.formGroup = this.formBuilder.group({
      id: [this.orcamento?.id ?? null],
      data: [this.orcamento?.data ?? null],
      valor: [this.orcamento?.valor ?? null],
      descricao: [this.orcamento?.descricao ?? null],
      nome: [this.orcamento?.nome ?? null],
      id_cliente: [this.cliente?.id ?? null],
    });
  }

  salvar() {
    if (this.orcamento && this.orcamento.id) {
      this.orcamentoService.atualizar(this.formGroup.value).subscribe(
        (orcamentoAtualizado) => {
          this.router.navigateByUrl('/orcamentos');
        },
        (error) => {
          alert('Erro ao atualizar' + JSON.stringify(error));
        }
      );
    } else {
      this.orcamentoService.cadastrar(this.formGroup.value).subscribe(
        (orcamentoCadastrado) => {
          this.router.navigateByUrl('/orcamentos');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }

  buscarClienteID(id:number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${environment.apiURL}/clientes/${id}`)
  }
}
