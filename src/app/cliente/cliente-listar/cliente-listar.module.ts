import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { ClienteListarRoutingModule } from "./cliente-listar-routing.module";
import { ClienteListarComponent } from "./cliente-listar/cliente-listar.component";

@NgModule({
  declarations: [ClienteListarComponent],
  imports: [
    CommonModule,
    ClienteListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
})
export class ClienteListarModule {}
