import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AmostraResolverService } from "./amostra.resolver";
import { AmostraCadastrarEditarComponent } from "./cadastrar-editar/cadastrar-editar.component";

const routes: Routes = [
  {
    path: '',
    component: AmostraCadastrarEditarComponent,
    resolve: {
      amostra: AmostraResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmostraCadastrarEditarRoutingModule {}
