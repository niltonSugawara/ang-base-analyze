import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { Cliente } from "../../cliente.model";
import { ClienteService } from "../../cliente.service";

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.scss'],
})
export class ClienteListarComponent implements OnInit {
  clientes$: Observable<Cliente[]>;

  colunasTabela = [
    'id',
    'dataCadastro',
    'razaoSocial',
    'nomeFantasia',
    'cnpj',
    'telefone',
    'acoes',
  ];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes() {
    this.clientes$ = this.clienteService.listar();
  }

  editar(cliente: Cliente) {
    this.router.navigateByUrl(`/clientes/editar/${cliente.id}`);
  }

  excluir(cliente: Cliente) {
    if (confirm('Confirma deletar cliente com id ' + cliente.id)) {
      this.clienteService.deletar(cliente).subscribe((cliente) => {
        this.listarClientes();
        alert('Deletado com sucesso');
      });
    }
  }
}
