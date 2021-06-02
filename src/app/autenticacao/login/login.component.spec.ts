import { APP_BASE_HREF } from "@angular/common";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [LoginComponent],
                imports: [
                    BrowserAnimationsModule,
                    ReactiveFormsModule,
                    MatCardModule,
                    MatInputModule,
                    MatButtonModule,
                    MatAutocompleteModule,
                    MatProgressSpinnerModule,
                    MatIconModule,
                    MatInputModule,
                    RouterModule.forRoot([], { relativeLinkResolution: "legacy" })
                ],
                providers: [
                    { provide: APP_BASE_HREF, useValue: "/" }
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("Deve criar componente", () => {
        expect(component).toBeTruthy();
    });
});
