import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";

import { OrcamentoCadastrarEditarRoutingModule } from "./orcamento-cadastrar-editar-routing.module";
import { OrcamentoCadastrarEditarComponent } from "./orcamento-cadastrar-editar/orcamento-cadastrar-editar.component";
import { OrcamentoResolverService } from "./orcamento.resolver";

@NgModule({
  declarations: [OrcamentoCadastrarEditarComponent],
  imports: [
    CommonModule,
    OrcamentoCadastrarEditarRoutingModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [OrcamentoResolverService],
})
export class OrcamentoCadastrarEditarModule {}
