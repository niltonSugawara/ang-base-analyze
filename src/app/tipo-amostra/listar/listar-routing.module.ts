import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/autenticacao/auth.guard";

import { TipoAmostraListarComponent } from "./listar/listar.component";

const routes: Routes = [
  { path: '', component: TipoAmostraListarComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoAmostraListarRoutingModule {}
