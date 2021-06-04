import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Cliente } from "../../cliente.model";
import { ClienteService } from "../../cliente.service";

@Component({
  selector: 'app-cliente-cadastrar-editar',
  templateUrl: './cliente-cadastrar-editar.component.html',
  styleUrls: ['./cliente-cadastrar-editar.component.scss'],
})
export class ClienteCadastrarEditarComponent implements OnInit {
  formGroup: FormGroup;
  cliente: Cliente;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var dataAtual = new Date();
    this.cliente = this.activatedRoute.snapshot.data['cliente'];

    this.formGroup = this.formBuilder.group({
      id: [this.cliente?.id ?? null],
      razaoSocial: [this.cliente?.razaoSocial ?? '', Validators.required],
      cnpj: [this.cliente?.cnpj ?? ''],
      email: [this.cliente?.email ?? '', Validators.email],
      nome: [this.cliente?.nome ?? ''],
      telefone: [this.cliente?.telefone ?? ''],
      endereco: [this.cliente?.endereco ?? ''],
      dataCadastro: [
        this.cliente?.dataCadastro ?? new Date().toLocaleDateString(),
      ],
    });
  }

  salvar() {
    if (this.cliente && this.cliente.id) {
      this.clienteService.atualizar(this.formGroup.value).subscribe(
        (clienteAtualizado) => {
          this.router.navigateByUrl('/clientes');
        },
        (error) => {
          alert('Erro ao atualizar' + JSON.stringify(error));
        }
      );
    } else {
      this.clienteService.cadastrar(this.formGroup.value).subscribe(
        (clienteCadastrado) => {
          this.router.navigateByUrl('/clientes');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }
}
