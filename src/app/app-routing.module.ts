import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'cadastro-cliente',
    loadChildren: './pages/cadastro-cliente/cadastro-cliente.module#CadastroClientePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-cliente/:id',
    loadChildren: './pages/cadastro-cliente/cadastro-cliente.module#CadastroClientePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-ferramenta',
    loadChildren:
      './pages/cadastro-ferramenta/cadastro-ferramenta.module#CadastroFerramentaPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-balanca',
    loadChildren: './pages/cadastro-balanca/cadastro-balanca.module#CadastroBalancaPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'consulta-cliente',
    loadChildren: './pages/consulta-cliente/consulta-cliente.module#ConsultaClientePageModule'
  },
  {
    path: 'afericao',
    loadChildren: './pages/afericao/afericao.module#AfericaoPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'consulta-balanca',
    loadChildren: './pages/consulta-balanca/consulta-balanca.module#ConsultaBalancaPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'consulta-ferramenta',
    loadChildren:
      './pages/consulta-ferramenta/consulta-ferramenta.module#ConsultaFerramentaPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'detalhe-cliente',
    loadChildren: './pages/detalhe-cliente/detalhe-cliente.module#DetalheClientePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'detalhe-cliente/:id',
    loadChildren: './pages/detalhe-cliente/detalhe-cliente.module#DetalheClientePageModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
