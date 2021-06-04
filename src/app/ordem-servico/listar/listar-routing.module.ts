import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/autenticacao/auth.guard";

import { OrdemServicoListarComponent } from "./listar/listar.component";

const routes: Routes = [
  { path: '', component: OrdemServicoListarComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdemServicoListarRoutingModule {}
