import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

import { Cliente} from '../cliente';
import { ClientesService} from '../../clientes.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']

})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;


  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute : ActivatedRoute
    ) {
      this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
      this.service
        .getClienteById(this.id)
        .subscribe (
          response => this.cliente = response,
            errorResponse => this.cliente = new Cliente()
          )
        }
    })
  }

  voltarLista() {
    this.router.navigate(['/clientes-lista']);
  }

  limparCliente () {
    this.ngOnInit();
  }

  novoCliente (){
    if(!this.router.navigate(['/clientes-form'])){
      this.router.navigate(['/clientes-form'])
    }
    this.cliente = new Cliente()
  }


  onSubmit() {
    if (this.id) {
      this.service
      .atualizar(this.cliente)
      .subscribe( respponse => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o cliente.']
      })
      }else{
        this.service
        .salvar(this.cliente)
        .subscribe( response => {
          this.success = true;
          this.errors = null;
          this.cliente = response;
          } , errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
            this.cliente = new Cliente();
        })
    }
  }
}
