import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { TecnicoQuimico } from "../../tecnico-quimico.model";
import { TecnicoQuimicoService } from "../../tecnico-quimico.service";

@Component({
  selector: 'app-tecnico-quimico-cadastrar-editar',
  templateUrl: './tecnico-quimico-cadastrar-editar.component.html',
  styleUrls: ['./tecnico-quimico-cadastrar-editar.component.scss'],
})
export class TecnicoQuimicoCadastrarEditarComponent implements OnInit {
  formGroup: FormGroup;
  tecnico: TecnicoQuimico;

  constructor(
    private formBuilder: FormBuilder,
    private tecnicoQuimico: TecnicoQuimicoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var dataAtual = new Date();
    this.tecnico = this.activatedRoute.snapshot.data['tecnicoQuimico'];

    this.formGroup = this.formBuilder.group({
      id: [this.tecnico?.id ?? null],
      nome: [this.tecnico?.nome ?? '', Validators.required],
      crq: [this.tecnico?.crq ?? '', Validators.required]
    });
  }

  salvar() {
    if (this.tecnico && this.tecnico.id) {
      this.tecnicoQuimico.atualizar(this.formGroup.value).subscribe(
        (tecnicoAtualizado) => {
          this.router.navigateByUrl('/tecnicos-quimicos');
        },
        (error) => {
          alert('Erro ao atualizar' + JSON.stringify(error));
        }
      );
    } else {
      this.tecnicoQuimico.cadastrar(this.formGroup.value).subscribe(
        (tecnicoAtualizado) => {
          this.router.navigateByUrl('/tecnicos-quimicos');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }
}
