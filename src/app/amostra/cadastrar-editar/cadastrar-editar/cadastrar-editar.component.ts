import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/cliente/cliente.model';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { Status } from 'src/app/status/model';
import { StatusService } from 'src/app/status/service';
import { TipoAmostra } from 'src/app/tipo-amostra/model';
import { TipoAmostraService } from 'src/app/tipo-amostra/service';

import { Amostra } from '../../amostra.model';
import { AmostraService } from '../../amostra.service';

@Component({
  selector: 'app-amostra-cadastrar-editar',
  templateUrl: './cadastrar-editar.component.html',
  styleUrls: ['./cadastrar-editar.component.scss'],
})
export class AmostraCadastrarEditarComponent implements OnInit {
  formGroup: FormGroup;
  amostra: Amostra;
  clientes$: Observable<Cliente[]>;
  tipoAmostras$: Observable<TipoAmostra[]>;
  status$: Observable<Status[]>;

  constructor(
    private formBuilder: FormBuilder,
    private amostraService: AmostraService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private tipoAmostraService: TipoAmostraService,
    private statusService: StatusService
  ) {}

  ngOnInit(): void {
    this.buscarCliente();
    this.buscarTipoAmostras();
    this.buscarStatus();
    this.amostra = this.activatedRoute.snapshot.data['amostra'];


    this.formGroup = this.formBuilder.group({
      id: [this.amostra?.id ?? null],
      nome: [this.amostra?.nome ?? null],
      descricao: [this.amostra?.descricao ?? null],
      cliente: [this.amostra?.cliente ?? null],
      tipoAmostra: [this.amostra?.tipoAmostra ?? null],
      status: [this.amostra?.status ?? null],
    });
  }

  salvar() {
    if (this.amostra && this.amostra.id) {
      this.amostraService.atualizar(this.formGroup.value).subscribe(
        (amostraAtualizado) => {
          this.router.navigateByUrl('/amostras');
        },
        (error) => {
          alert('Erro ao atualizar' + JSON.stringify(error));
        }
      );
    } else {
      this.amostraService.cadastrar(this.formGroup.value).subscribe(
        (amostraCadastrado) => {
          this.router.navigateByUrl('/amostras');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }

  buscarCliente() {
    this.clientes$ = this.clienteService.listar();
  }

  comparaClientes(o1: any, o2: any) {
    return o1?.id == o2?.id;
  }

  buscarTipoAmostras() {
    this.tipoAmostras$ = this.tipoAmostraService.listar();
  }

  comparaTipoAmostras(o1: any, o2: any) {
    return o1?.id == o2?.id;
  }

  buscarStatus() {
    this.status$ = this.statusService.listar();
  }

  comparaStatus(o1: any, o2: any) {
    return o1?.id == o2?.id;
  }
}
