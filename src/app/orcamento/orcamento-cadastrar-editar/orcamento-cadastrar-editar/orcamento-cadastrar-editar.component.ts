import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Orcamento } from "../../orcamento.model";
import { OrcamentoService } from "../../orcamento.service";

@Component({
  selector: 'app-orcamento-cadastrar-editar',
  templateUrl: './orcamento-cadastrar-editar.component.html',
  styleUrls: ['./orcamento-cadastrar-editar.component.scss'],
})
export class OrcamentoCadastrarEditarComponent implements OnInit {
  formGroup: FormGroup;
  orcamento: Orcamento;

  constructor(
    private formBuilder: FormBuilder,
    private orcamentoService: OrcamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var dataAtual = new Date();
    this.orcamento = this.activatedRoute.snapshot.data['orcamento'];

    this.formGroup = this.formBuilder.group({
      id: [this.orcamento?.id ?? null],
      dataCadastro: [
        this.orcamento?.dataCadastro ?? new Date().toLocaleDateString(),
      ],
      valor: [this.orcamento?.valor ?? null],
      status: [this.orcamento?.status ?? null],
    });
  }

  salvar() {
    if (this.orcamento && this.orcamento.id) {
      this.orcamentoService.atualizar(this.formGroup.value).subscribe(
        (orcamentoAtualizado) => {
          this.router.navigateByUrl('/orcamentos');
        },
        (error) => {
          alert('Erro ao atualizar' + JSON.stringify(error));
        }
      );
    } else {
      this.orcamentoService.cadastrar(this.formGroup.value).subscribe(
        (orcamentoCadastrado) => {
          this.router.navigateByUrl('/orcamentos');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }
}
