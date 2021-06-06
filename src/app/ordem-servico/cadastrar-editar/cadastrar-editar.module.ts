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
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [OrdemServicoResolverService],
})
export class OrdemServicoCadastrarEditarModule {}
