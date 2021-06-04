import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/autenticacao/auth.guard";

import { NormaTecnicaListarComponent } from "./listar/listar.component";

const routes: Routes = [
  { path: '', component: NormaTecnicaListarComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormaTecnicaListarRoutingModule {}
