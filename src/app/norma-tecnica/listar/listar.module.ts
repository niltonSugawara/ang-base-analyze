import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { NormaTecnicaListarRoutingModule } from "./listar-routing.module";
import { NormaTecnicaListarComponent } from "./listar/listar.component";

@NgModule({
  declarations: [NormaTecnicaListarComponent],
  imports: [
    CommonModule,
    NormaTecnicaListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
})
export class NormaTecnicaListarModule {}