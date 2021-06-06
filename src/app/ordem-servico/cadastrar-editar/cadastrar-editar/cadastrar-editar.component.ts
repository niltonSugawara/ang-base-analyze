import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { TecnicoQuimico } from "src/app/tecnico-quimico/tecnico-quimico.model";
import { TecnicoQuimicoService } from "src/app/tecnico-quimico/tecnico-quimico.service";
import { OrdemServico } from "../../model";
import { OrdemServicoService } from "../../service";

@Component({
  selector: 'app-norma-tecnica-cadastrar-editar',
  templateUrl: './cadastrar-editar.component.html',
  styleUrls: ['./cadastrar-editar.component.scss'],
})
export class OrdemServicoCadastrarEditarComponent implements OnInit {
  formGroup: FormGroup;
  ordemServico: OrdemServico;
  tecnicos$: Observable<TecnicoQuimico[]>;

  constructor(
    private formBuilder: FormBuilder,
    private ordemServicoService: OrdemServicoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tecnicoQuimicoService: TecnicoQuimicoService
  ) {}

  ngOnInit(): void {
    this.buscarTecnicos();
    this.ordemServico = this.activatedRoute.snapshot.data['ordemServico'];

    this.formGroup = this.formBuilder.group({
      id: [this.ordemServico?.id ?? null],
      nome: [this.ordemServico?.nome ?? null],
      data: [this.ordemServico?.data ?? null],
      tecnico: [this.ordemServico?.tecnico ?? null],
    });
  }

  salvar() {
    if (this.ordemServico && this.ordemServico.id) {
      this.ordemServicoService.atualizar(this.formGroup.value).subscribe(
        (ordemServicoAtualizado) => {
          this.router.navigateByUrl('/ordens-servicos');
        },
        (error) => {
          alert('Erro ao atualizar' + JSON.stringify(error));
        }
      );
    } else {
      this.ordemServicoService.cadastrar(this.formGroup.value).subscribe(
        (ordemServicoCadastrado) => {
          this.router.navigateByUrl('/ordens-servicos');
        },
        (error) => {
          alert('Erro ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }

  buscarTecnicos() {
    this.tecnicos$ = this.tecnicoQuimicoService.listar();
  }

  comparaTecnicos(o1: any, o2: any) {
    return o1?.id == o2?.id;
  }

}
