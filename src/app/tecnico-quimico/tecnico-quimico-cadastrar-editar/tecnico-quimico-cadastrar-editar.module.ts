import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";

import { TecnicoQuimicoCadastrarEditarComponent } from "./tecnico-quimico-cadastrar-editar/tecnico-quimico-cadastrar-editar.component";

import { TecnicoQuimicoResolverService } from "./tecnico-quimico-cadastrar-editar.resolver";
import { TecnicoQuimicoCadastrarEditarRoutingModule } from "./tecnico-quimico-cadastrar-editar-routing.module";

@NgModule({
  declarations: [TecnicoQuimicoCadastrarEditarComponent],
  imports: [
    CommonModule,
    TecnicoQuimicoCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [TecnicoQuimicoResolverService],
})
export class TecnicoQuimicoCadastrarEditarModule {}
