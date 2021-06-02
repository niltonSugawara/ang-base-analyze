import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { AutenticacaoService } from "../service";


@Component({
    selector: "app-login-page-component",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private autenticacaoService: AutenticacaoService
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ["", Validators.required],
            senha: ["", Validators.required]
        });
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        this.autenticacaoService.login(this.loginForm.controls["email"].value, this.loginForm.controls["senha"].value);
        this.router.navigateByUrl("/")
    }
}
