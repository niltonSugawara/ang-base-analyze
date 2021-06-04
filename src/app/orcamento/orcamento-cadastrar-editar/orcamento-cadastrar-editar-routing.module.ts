import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { OrcamentoCadastrarEditarComponent } from "./orcamento-cadastrar-editar/orcamento-cadastrar-editar.component";
import { OrcamentoResolverService } from "./orcamento.resolver";

const routes: Routes = [
  {
    path: '',
    component: OrcamentoCadastrarEditarComponent,
    resolve: {
      orcamento: OrcamentoResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrcamentoCadastrarEditarRoutingModule {}
