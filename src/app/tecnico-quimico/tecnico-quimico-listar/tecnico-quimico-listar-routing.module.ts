import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/autenticacao/auth.guard";
import { TecnicoQuimicoListarComponent } from "./tecnico-quimico-listar/tecnico-quimico-listar.component";

const routes: Routes = [
  { path: '', component: TecnicoQuimicoListarComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicoQuimicoListarRoutingModule {}
