import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NormaTecnicaCadastrarEditarComponent } from "./cadastrar-editar/cadastrar-editar.component";
import { NormaTecnicaResolverService } from "./resolver";

const routes: Routes = [
  {
    path: '',
    component: NormaTecnicaCadastrarEditarComponent,
    resolve: {
      normaTecnica: NormaTecnicaResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormaTecnicaCadastrarEditarRoutingModule {}
