import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonSlides, ModalController, NavController } from '@ionic/angular';
import { ModalClientesComponent } from 'src/app/components/modal-clientes/modal-clientes.component';
import { ModalBalancasComponent } from 'src/app/components/modal-balancas/modal-balancas.component';
import { ModalFerramentasComponent } from 'src/app/components/modal-ferramentas/modal-ferramentas.component';

@Component({
  selector: 'app-afericao',
  templateUrl: './afericao.page.html',
  styleUrls: ['./afericao.page.scss']
})
export class AfericaoPage implements OnInit {
  afericaoForm: FormGroup;
  cliente: any = '';
  balanca: any = '';
  ferramenta: any = '';
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    public navCtrl: NavController
  ) {}

  @ViewChild('mySlider', { static: true }) slides: IonSlides;

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.afericaoForm = this.formBuilder.group({
      pesoCentro: ['', [Validators.required]],
      pesoCanto1: ['', [Validators.required]],
      pesoCanto2: ['', [Validators.required]],
      pesoCanto3: ['', [Validators.required]],
      pesoCanto4: ['', [Validators.required]],
      cargaMaxima: ['', [Validators.required]],
      temperatura: ['', [Validators.required]],
      umidade: ['', [Validators.required]]
    });
  }

  nextSlide() {
    this.slides.slideNext();
  }
  prevSlide() {
    this.slides.slidePrev();
  }
  close() {
    this.navCtrl.back();
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
        clienteId: this.cliente
      }
    });
    modal.present();

    const { data } = await modal.onDidDismiss();
    this.balanca = data;
  }

  async modalFerramenta() {
    console.log('modalFerramenta');
    const modal = await this.modalCtrl.create({
      component: ModalFerramentasComponent
    });
    modal.present();

    const { data } = await modal.onDidDismiss();
    this.ferramenta = data;
  }
}
