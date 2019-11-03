import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultaFerramentaPage } from './consulta-ferramenta.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaFerramentaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultaFerramentaPage]
})
export class ConsultaFerramentaPageModule {}
