import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Amostra } from "../../amostra.model";
import { AmostraService } from "../../amostra.service";

@Component({
  selector: 'app-amostra-cadastrar-editar',
  templateUrl: './cadastrar-editar.component.html',
  styleUrls: ['./cadastrar-editar.component.scss'],
})
export class AmostraCadastrarEditarComponent implements OnInit {
  formGroup: FormGroup;
  amostra: Amostra;

  constructor(
    private formBuilder: FormBuilder,
    private amostraService: AmostraService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var dataAtual = new Date();
    this.amostra = this.activatedRoute.snapshot.data['amostra'];

    this.formGroup = this.formBuilder.group({
      id: [this.amostra?.id ?? null],
      descricao: [this.amostra?.descricao ?? null]
    });
  }

  salvar() {
    if (this.amostra && this.amostra.id) {
      this.amostraService.atualizar(this.formGroup.value).subscribe(
        (amostraAtualizado) => {
          this.router.navigateByUrl('/amostras');
        },
        (error) => {
          alert('Erro ao atualizar' + JSON.stringify(error));
        }
      );
    } else {
      this.amostraService.cadastrar(this.formGroup.value).subscribe(
        (amostraCadastrado) => {
          this.router.navigateByUrl('/amostras');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }
}
