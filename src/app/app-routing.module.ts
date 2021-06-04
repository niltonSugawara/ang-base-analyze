import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./autenticacao/auth.guard";
import { HomeComponent } from "./home/home.component";
import { NotfoundpageComponent } from "./pages/notfoundpage/notfoundpage.component";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    loadChildren: () =>
      import('./autenticacao/login/login.module').then(
        (mod) => mod.LoginModule
      ),
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./cliente/cliente-listar/cliente-listar.module').then(
        (modulo) => modulo.ClienteListarModule
      ),
  },
  {
    path: 'clientes/cadastrar',
    loadChildren: () =>
      import(
        './cliente/cliente-cadastrar-editar/cliente-cadastrar-editar.module'
      ).then((modulo) => modulo.ClienteCadastrarEditarModule),
  },
  {
    path: 'clientes/editar/:id',
    loadChildren: () =>
      import(
        './cliente/cliente-cadastrar-editar/cliente-cadastrar-editar.module'
      ).then((modulo) => modulo.ClienteCadastrarEditarModule),
  },
  {
    path: 'orcamentos',
    loadChildren: () =>
      import('./orcamento/orcamento-listar/orcamento-listar.module').then(
        (modulo) => modulo.OrcamentoListarModule
      ),
  },
  {
    path: 'orcamentos/cadastrar',
    loadChildren: () =>
      import(
        './orcamento/orcamento-cadastrar-editar/orcamento-cadastrar-editar.module'
      ).then((modulo) => modulo.OrcamentoCadastrarEditarModule),
  },
  {
    path: 'orcamentos/editar/:id',
    loadChildren: () =>
      import(
        './orcamento/orcamento-cadastrar-editar/orcamento-cadastrar-editar.module'
      ).then((modulo) => modulo.OrcamentoCadastrarEditarModule),
  },
  {
    path: 'normas-tecnicas',
    loadChildren: () =>
      import('./norma-tecnica/listar/listar.module').then(
        (modulo) => modulo.NormaTecnicaListarModule
      ),
  },
  {
    path: 'normas-tecnicas/cadastrar',
    loadChildren: () =>
      import('./norma-tecnica/cadastrar-editar/cadastrar-editar.module').then(
        (modulo) => modulo.NormaTecnicaCadastrarEditarModule
      ),
  },
  {
    path: 'normas-tecnicas/editar/:id',
    loadChildren: () =>
      import('./norma-tecnica/cadastrar-editar/cadastrar-editar.module').then(
        (modulo) => modulo.NormaTecnicaCadastrarEditarModule
      ),
  },
  {
    path: 'tecnicos-quimicos',
    loadChildren: () =>
      import(
        './tecnico-quimico/tecnico-quimico-listar/tecnico-quimico-listar.module'
      ).then((modulo) => modulo.TecnicoQuimicoListarModule),
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
  },

  {
    path: 'amostras',
    loadChildren: () =>
      import('./amostra/listar/listar.module').then(
        (modulo) => modulo.AmostraListarModule
      ),
  },
  {
    path: 'amostras/cadastrar',
    loadChildren: () =>
      import('./amostra/cadastrar-editar/cadastrar-editar.module').then(
        (modulo) => modulo.AmostraCadastrarEditarModule
      ),
  },
  {
    path: 'amostras/editar/:id',
    loadChildren: () =>
      import('./amostra/cadastrar-editar/cadastrar-editar.module').then(
        (modulo) => modulo.AmostraCadastrarEditarModule
      ),
  },
  {
    path: 'tipoAmostras',
    loadChildren: () =>
      import('./tipo-amostra/listar/listar.module').then(
        (modulo) => modulo.TipoAmostraListarModule
      ),
  },
  {
    path: 'tipoAmostras/cadastrar',
    loadChildren: () =>
      import('./tipo-amostra/cadastrar-editar/cadastrar-editar.module').then(
        (modulo) => modulo.TipoAmostraCadastrarEditarModule
      ),
  },
  {
    path: 'tipoAmostras/editar/:id',
    loadChildren: () =>
      import('./tipo-amostra/cadastrar-editar/cadastrar-editar.module').then(
        (modulo) => modulo.TipoAmostraCadastrarEditarModule
      ),
  },
  {
    path: 'ordens-servicos',
    loadChildren: () =>
      import('./ordem-servico/listar/listar.module').then(
        (modulo) => modulo.OrdemServicoListarModule
      ),
  },
  {
    path: 'ordens-servicos/cadastrar',
    loadChildren: () =>
      import('./ordem-servico/cadastrar-editar/cadastrar-editar.module').then(
        (modulo) => modulo.OrdemServicoCadastrarEditarModule
      ),
  },
  {
    path: 'ordens-servicos/editar/:id',
    loadChildren: () =>
      import('./ordem-servico/cadastrar-editar/cadastrar-editar.module').then(
        (modulo) => modulo.OrdemServicoCadastrarEditarModule
      ),
  },
  { path: '**', component: NotfoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
