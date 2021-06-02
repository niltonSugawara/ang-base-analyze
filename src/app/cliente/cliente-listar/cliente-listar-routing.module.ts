import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/autenticacao/auth.guard";

import { ClienteListarComponent } from "./cliente-listar/cliente-listar.component";

const routes: Routes = [
  { path: '', component: ClienteListarComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteListarRoutingModule {}
