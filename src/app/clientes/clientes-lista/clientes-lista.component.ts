import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemError: string;

  constructor (
    private service: ClientesService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
    .getClientes()
    .subscribe( resposta => this.clientes = resposta);
  }

  novoCliente (){
    this.router.navigate(['/clientes-form'])
  }

  preparaDelecao ( cliente : Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente () {
    console.log(this.clienteSelecionado);
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe( response => {
        this.mensagemSucesso = 'Cliente excluído com sucesso.'
        this.ngOnInit();
      },
        erro => this.mensagemError = 'Não foi possível deletar o Cliente.'
     )
  }

}
