import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

// ADICIONAR canLoad: [AuthGuard] AS ROTAS

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'cadastro-cliente',
    loadChildren: './pages/cadastro-cliente/cadastro-cliente.module#CadastroClientePageModule'
  },
  {
    path: 'cadastro-ferramenta',
    loadChildren:
      './pages/cadastro-ferramenta/cadastro-ferramenta.module#CadastroFerramentaPageModule'
  },
  {
    path: 'cadastro-balanca',
    loadChildren: './pages/cadastro-balanca/cadastro-balanca.module#CadastroBalancaPageModule'
  },
  { path: 'consulta-cliente', loadChildren: './pages/consulta-cliente/consulta-cliente.module#ConsultaClientePageModule' },
  { path: 'cadastro-cliente/:id', loadChildren: './pages/cadastro-cliente/cadastro-cliente.module#CadastroClientePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
