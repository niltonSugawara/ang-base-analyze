import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";

import { ClienteCadastrarEditarRoutingModule } from "./cliente-cadastrar-editar-routing.module";
import { ClienteCadastrarEditarComponent } from "./cliente-cadastrar-editar/cliente-cadastrar-editar.component";
import { ClienteResolverService } from "./cliente.resolver";

@NgModule({
  declarations: [ClienteCadastrarEditarComponent],
  imports: [
    CommonModule,
    ClienteCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [ClienteResolverService],
})
export class ClienteCadastrarEditarModule {}
