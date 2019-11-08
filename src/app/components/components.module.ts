import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalClientesComponent } from './modal-clientes/modal-clientes.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { ModalBalancasComponent } from './modal-balancas/modal-balancas.component';
import { ModalFerramentasComponent } from './modal-ferramentas/modal-ferramentas.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [ModalClientesComponent, ModalBalancasComponent,ModalFerramentasComponent],
  exports: [ModalClientesComponent, ModalBalancasComponent, ModalFerramentasComponent]
})
export class ComponentsModule {}
