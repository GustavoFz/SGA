import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroFerramentaPage } from './cadastro-ferramenta.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { BrMaskerModule } from 'br-mask';

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
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ComponentsModule,
    BrMaskerModule
  ],
  declarations: [CadastroFerramentaPage]
})
export class CadastroFerramentaPageModule {}
