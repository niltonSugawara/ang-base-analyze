import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";

import { NormaTecnicaCadastrarEditarRoutingModule } from "./cadastrar-editar-routing.module";
import { NormaTecnicaCadastrarEditarComponent } from "./cadastrar-editar/cadastrar-editar.component";
import { NormaTecnicaResolverService } from "./resolver";

@NgModule({
  declarations: [NormaTecnicaCadastrarEditarComponent],
  imports: [
    CommonModule,
    NormaTecnicaCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [NormaTecnicaResolverService],
})
export class NormaTecnicaCadastrarEditarModule {}
