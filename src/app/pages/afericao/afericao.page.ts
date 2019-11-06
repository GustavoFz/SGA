import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonSlides, ModalController } from '@ionic/angular';
import { ModalClientesComponent } from 'src/app/components/modal-clientes/modal-clientes.component';
import { ModalBalancasComponent } from 'src/app/components/modal-balancas/modal-balancas.component';

@Component({
  selector: 'app-afericao',
  templateUrl: './afericao.page.html',
  styleUrls: ['./afericao.page.scss']
})
export class AfericaoPage implements OnInit {
  afericaoForm: FormGroup;
  cliente: any = null;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private formBuilder: FormBuilder, private modalCtrl: ModalController) {}

  @ViewChild('mySlider', { static: true }) slides: IonSlides;

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.afericaoForm = this.formBuilder.group({
      cnpj: ['', [Validators.required]],
      nome: ['', [Validators.required]]
    });
  }

  nextSlide() {
    this.slides.slideNext();
  }

  onSubmit() {
    console.log(this.afericaoForm.value);
  }

  async modalCliente() {
    console.log('modalCliente');
    const modal = await this.modalCtrl.create({
      component: ModalClientesComponent
    });
    modal.present();

    const { data } = await modal.onDidDismiss();
    this.cliente = data;
  }

  async modalBalanca() {
    console.log('modalBalanca');
    const modal = await this.modalCtrl.create({
      component: ModalBalancasComponent,
      componentProps: {
        clienteId: '3IFm78M4yXIjXeZtRzXX'
      }
    });
    modal.present();

    const { data } = await modal.onDidDismiss();
    this.cliente = data;
  }
}
