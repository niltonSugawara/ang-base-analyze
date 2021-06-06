import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { MatDatepicker } from "@angular/material/datepicker";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Cliente } from "src/app/cliente/cliente.model";
import { ClienteService } from "src/app/cliente/cliente.service";
import { MatDatePickerSharedModule } from "src/app/mat-datepicker";

import { Orcamento } from "../../orcamento.model";
import { OrcamentoService } from "../../orcamento.service";

@Component({
  selector: 'app-orcamento-cadastrar-editar',
  templateUrl: './orcamento-cadastrar-editar.component.html',
  styleUrls: ['./orcamento-cadastrar-editar.component.scss'],
})
export class OrcamentoCadastrarEditarComponent implements OnInit {
  formGroup: FormGroup;
  orcamento: Orcamento;
  clientes$: Observable<Cliente[]>;

  constructor(
    private formBuilder: FormBuilder,
    private orcamentoService: OrcamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.buscarClientes();
    this.orcamento = this.activatedRoute.snapshot.data['orcamento'];

    this.formGroup = this.formBuilder.group({
      id: [this.orcamento?.id ?? null],
      data: [this.orcamento?.data ?? null],
      valor: [this.orcamento?.valor ?? null],
      descricao: [this.orcamento?.descricao ?? null],
      nome: [this.orcamento?.nome ?? null],
      cliente: [this.orcamento?.cliente ?? null],
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

  buscarClientes() {
    this.clientes$ = this.clienteService.listar();
  }

  comparaCliente(o1: any, o2: any) {
    return o1?.id == o2?.id;
  }
}
