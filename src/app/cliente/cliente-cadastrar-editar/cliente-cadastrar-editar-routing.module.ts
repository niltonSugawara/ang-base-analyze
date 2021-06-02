import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClienteCadastrarEditarComponent } from "./cliente-cadastrar-editar/cliente-cadastrar-editar.component";
import { ClienteResolverService } from "./cliente.resolver";

const routes: Routes = [
  {
    path: '',
    component: ClienteCadastrarEditarComponent,
    resolve: {
      cliente: ClienteResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteCadastrarEditarRoutingModule {}
