import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/autenticacao/auth.guard";

import { OrcamentoListarComponent } from "./orcamento-listar/orcamento-listar.component";

const routes: Routes = [
  { path: '', component: OrcamentoListarComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrcamentoListarRoutingModule {}
