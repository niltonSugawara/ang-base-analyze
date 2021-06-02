import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { TecnicoQuimicoListarRoutingModule } from "./tecnico-quimico-listar-routing.module";
import { TecnicoQuimicoListarComponent } from "./tecnico-quimico-listar/tecnico-quimico-listar.component";


@NgModule({
  declarations: [TecnicoQuimicoListarComponent],
  imports: [
    CommonModule,
    TecnicoQuimicoListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
})
export class TecnicoQuimicoListarModule {}
