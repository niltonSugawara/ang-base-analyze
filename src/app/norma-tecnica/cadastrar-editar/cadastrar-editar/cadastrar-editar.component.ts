import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { NormaTecnica } from "../../model";
import { NormaTecnicaService } from "../../service";

@Component({
  selector: 'app-norma-tecnica-cadastrar-editar',
  templateUrl: './cadastrar-editar.component.html',
  styleUrls: ['./cadastrar-editar.component.scss'],
})
export class NormaTecnicaCadastrarEditarComponent implements OnInit {
  formGroup: FormGroup;
  normaTecnica: NormaTecnica;

  constructor(
    private formBuilder: FormBuilder,
    private normaTecnicaService: NormaTecnicaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var dataAtual = new Date();
    this.normaTecnica = this.activatedRoute.snapshot.data['normaTecnica'];

    this.formGroup = this.formBuilder.group({
      id: [this.normaTecnica?.id ?? null],
      nome: [this.normaTecnica?.nome ?? '', Validators.required],
    });
  }

  salvar() {
    if (this.normaTecnica && this.normaTecnica.id) {
      this.normaTecnicaService.atualizar(this.formGroup.value).subscribe(
        (normaTecnicaAtualizado) => {
          this.router.navigateByUrl('/normas-tecnicas');
        },
        (error) => {
          alert('Erro ao atualizar' + JSON.stringify(error));
        }
      );
    } else {
      this.normaTecnicaService.cadastrar(this.formGroup.value).subscribe(
        (normaTecnicaCadastrado) => {
          this.router.navigateByUrl('/normas-tecnicas');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }
}
