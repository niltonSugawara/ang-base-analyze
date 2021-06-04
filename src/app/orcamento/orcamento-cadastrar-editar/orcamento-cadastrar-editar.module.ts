import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";

import { OrcamentoCadastrarEditarRoutingModule } from "./orcamento-cadastrar-editar-routing.module";
import { OrcamentoCadastrarEditarComponent } from "./orcamento-cadastrar-editar/orcamento-cadastrar-editar.component";
import { OrcamentoResolverService } from "./orcamento.resolver";

@NgModule({
  declarations: [OrcamentoCadastrarEditarComponent],
  imports: [
    CommonModule,
    OrcamentoCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [OrcamentoResolverService],
})
export class OrcamentoCadastrarEditarModule {}
