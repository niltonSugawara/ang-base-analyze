import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TipoAmostraResolverService } from "./resolver";
import { TipoAmostraCadastrarEditarComponent } from "./cadastrar-editar/cadastrar-editar.component";

const routes: Routes = [
  {
    path: '',
    component: TipoAmostraCadastrarEditarComponent,
    resolve: {
      tipoAmostra: TipoAmostraResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAmostraCadastrarEditarRoutingModule {}
