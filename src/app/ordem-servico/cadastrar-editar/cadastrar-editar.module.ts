import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";

import { OrdemServicoCadastrarEditarRoutingModule } from "./cadastrar-editar-routing.module";
import { OrdemServicoCadastrarEditarComponent } from "./cadastrar-editar/cadastrar-editar.component";
import { OrdemServicoResolverService } from "./resolver";

@NgModule({
  declarations: [OrdemServicoCadastrarEditarComponent],
  imports: [
    CommonModule,
    OrdemServicoCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [OrdemServicoResolverService],
})
export class OrdemServicoCadastrarEditarModule {}
