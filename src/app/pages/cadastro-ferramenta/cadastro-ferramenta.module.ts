import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroFerramentaPage } from './cadastro-ferramenta.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFerramentaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroFerramentaPage]
})
export class CadastroFerramentaPageModule {}
