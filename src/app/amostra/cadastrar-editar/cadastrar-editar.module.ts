import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AmostraResolverService } from "./amostra.resolver";
import { AmostraCadastrarEditarRoutingModule } from "./cadastrar-editar-routing.module";
import { AmostraCadastrarEditarComponent } from "./cadastrar-editar/cadastrar-editar.component";

@NgModule({
  declarations: [AmostraCadastrarEditarComponent],
  imports: [
    CommonModule,
    AmostraCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [AmostraResolverService],
})
export class AmostraCadastrarEditarModule {}
