import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultaBalancaPage } from './consulta-balanca.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaBalancaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultaBalancaPage]
})
export class ConsultaBalancaPageModule {}
