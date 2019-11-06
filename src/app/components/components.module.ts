import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalClientesComponent } from './modal-clientes/modal-clientes.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { ModalBalancasComponent } from './modal-balancas/modal-balancas.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [ModalClientesComponent, ModalBalancasComponent],
  exports: [ModalClientesComponent, ModalBalancasComponent]
})
export class ComponentsModule {}
