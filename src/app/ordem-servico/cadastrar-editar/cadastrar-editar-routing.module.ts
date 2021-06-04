import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { OrdemServicoCadastrarEditarComponent } from "./cadastrar-editar/cadastrar-editar.component";
import { OrdemServicoResolverService } from "./resolver";

const routes: Routes = [
  {
    path: '',
    component: OrdemServicoCadastrarEditarComponent,
    resolve: {
      ordemServico: OrdemServicoResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdemServicoCadastrarEditarRoutingModule {}
