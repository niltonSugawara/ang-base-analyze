import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmostraComponent } from './amostra/amostra.component';
import { HomeComponent } from './home/home.component';
import { NormaTecnicaComponent } from './norma-tecnica/norma-tecnica.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';
import { TecnicoQuimicoComponent } from './tecnico-quimico/tecnico-quimico.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./autenticacao/login/login.module').then(
        (mod) => mod.LoginModule
      ),
  },
  {
    path: 'cliente',
    loadChildren: () =>
      import('./cliente/cliente-listar/cliente-listar.module').then(
        (modulo) => modulo.ClienteListarModule
      ),
  },
  {
    path: 'cliente/cadastrar',
    loadChildren: () =>
      import(
        './cliente/cliente-cadastrar-editar/cliente-cadastrar-editar.module'
      ).then((modulo) => modulo.ClienteCadastrarEditarModule),
  },
  {
    path: 'cliente/editar/:id',
    loadChildren: () =>
      import(
        './cliente/cliente-cadastrar-editar/cliente-cadastrar-editar.module'
      ).then((modulo) => modulo.ClienteCadastrarEditarModule),
  },
  { path: 'orcamento', component: OrcamentoComponent },
  { path: 'ordem-servico', component: OrdemServicoComponent },
  { path: 'amostra', component: AmostraComponent },
  { path: 'norma-tecnica', component: NormaTecnicaComponent },
  {
    path: 'tecnicos-quimicos',
    loadChildren: () =>
      import('./tecnico-quimico/tecnico-quimico-listar/tecnico-quimico-listar.module').then(
        (modulo) => modulo.TecnicoQuimicoListarModule
      ),
  },
  {
    path: 'tecnicos-quimicos/cadastrar',
    loadChildren: () =>
      import(
        './tecnico-quimico/tecnico-quimico-cadastrar-editar/tecnico-quimico-cadastrar-editar.module'
      ).then((modulo) => modulo.TecnicoQuimicoCadastrarEditarModule),
  },
  {
    path: 'tecnicos-quimicos/editar/:id',
    loadChildren: () =>
      import(
        './tecnico-quimico/tecnico-quimico-cadastrar-editar/tecnico-quimico-cadastrar-editar.module'
      ).then((modulo) => modulo.TecnicoQuimicoCadastrarEditarModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
