import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TecnicoQuimicoResolverService } from "./tecnico-quimico-cadastrar-editar.resolver";
import {
  TecnicoQuimicoCadastrarEditarComponent,
} from "./tecnico-quimico-cadastrar-editar/tecnico-quimico-cadastrar-editar.component";

const routes: Routes = [
  {
    path: '',
    component: TecnicoQuimicoCadastrarEditarComponent,
    resolve: {
      tecnicoQuimico: TecnicoQuimicoResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicoQuimicoCadastrarEditarRoutingModule {}
