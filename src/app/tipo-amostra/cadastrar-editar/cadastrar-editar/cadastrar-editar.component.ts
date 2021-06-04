import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { TipoAmostra } from "../../model";
import { TipoAmostraService } from "../../service";

@Component({
  selector: 'app-tipoAmostra-cadastrar-editar',
  templateUrl: './cadastrar-editar.component.html',
  styleUrls: ['./cadastrar-editar.component.scss'],
})
export class TipoAmostraCadastrarEditarComponent implements OnInit {
  formGroup: FormGroup;
  tipoAmostra: TipoAmostra;

  constructor(
    private formBuilder: FormBuilder,
    private tipoAmostraService: TipoAmostraService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var dataAtual = new Date();
    this.tipoAmostra = this.activatedRoute.snapshot.data['tipoAmostra'];

    this.formGroup = this.formBuilder.group({
      id: [this.tipoAmostra?.id ?? null],
      tipoAmostra: [this.tipoAmostra?.tipoAmostra ?? null]
    });
  }

  salvar() {
    if (this.tipoAmostra && this.tipoAmostra.id) {
      this.tipoAmostraService.atualizar(this.formGroup.value).subscribe(
        (tipoAmostraAtualizado) => {
          this.router.navigateByUrl('/tipoAmostras');
        },
        (error) => {
          alert('Erro ao atualizar' + JSON.stringify(error));
        }
      );
    } else {
      this.tipoAmostraService.cadastrar(this.formGroup.value).subscribe(
        (tipoAmostraCadastrado) => {
          this.router.navigateByUrl('/tipoAmostras');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }
}
