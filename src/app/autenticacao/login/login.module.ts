import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { routes } from "./login.routes";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatIconModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule {}
