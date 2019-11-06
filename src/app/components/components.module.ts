import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalClientesComponent } from './modal-clientes/modal-clientes.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ModalClientesComponent],
  exports: [ModalClientesComponent]
})
export class ComponentsModule {}
