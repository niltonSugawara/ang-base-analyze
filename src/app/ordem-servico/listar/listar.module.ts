import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { OrdemServicoListarRoutingModule } from "./listar-routing.module";
import { OrdemServicoListarComponent } from "./listar/listar.component";

@NgModule({
  declarations: [OrdemServicoListarComponent],
  imports: [
    CommonModule,
    OrdemServicoListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
})
export class OrdemServicoListarModule {}
