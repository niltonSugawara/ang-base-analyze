import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";

import { TipoAmostraResolverService } from "./resolver";
import { TipoAmostraCadastrarEditarRoutingModule } from "./cadastrar-editar-routing.module";
import { TipoAmostraCadastrarEditarComponent } from "./cadastrar-editar/cadastrar-editar.component";

@NgModule({
  declarations: [TipoAmostraCadastrarEditarComponent],
  imports: [
    CommonModule,
    TipoAmostraCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [TipoAmostraResolverService],
})
export class TipoAmostraCadastrarEditarModule {}
