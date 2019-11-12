import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonSlides, ModalController, NavController, AlertController } from '@ionic/angular';
import { ModalClientesComponent } from 'src/app/components/modal-clientes/modal-clientes.component';
import { Subscription } from 'rxjs';
import { Ferramenta } from 'src/app/interfaces/ferramenta';
import { FerramentaService } from 'src/app/services/ferramenta.service';
import { BalancaService } from 'src/app/services/balanca.service';
import { Balanca } from 'src/app/interfaces/balanca';

@Component({
  selector: 'app-afericao',
  templateUrl: './afericao.page.html',
  styleUrls: ['./afericao.page.scss']
})
export class AfericaoPage implements OnInit {
  afericaoForm: FormGroup;
  cliente: any = '';
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  private balancasSubscription: Subscription;
  public balancas = new Array<Balanca>();
  private ferramentasSubscription: Subscription;
  public ferramentas = new Array<Ferramenta>();

  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    public alertController: AlertController,
    public ferramentaService: FerramentaService,
    public balancaService: BalancaService
  ) { }

  @ViewChild('mySlider', { static: true }) slides: IonSlides;

  ngOnInit() {
    this.createForm();
    this.getFerramentas();
    this.getBalancas();
  }

  getBalancas() {
    this.balancasSubscription = this.balancaService.getBalancas().subscribe(data => {
      this.balancas = data;
    });
  }
  getFerramentas() {
    this.ferramentasSubscription = this.ferramentaService.getFerramentas().subscribe(data => {
      this.ferramentas = data;
    });
  }

  private createForm(): void {
    this.afericaoForm = this.formBuilder.group({
      balanca: ['', [Validators.required]],
      ferramenta: ['', [Validators.required]],
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

  async mensagem() {
    const alert = await this.alertController.create({
      header: 'Aferição concluida ',
      message: 'A balança está calibrada',
      buttons: ['OK']
    });

    await alert.present();
    this.navCtrl.navigateForward('home');
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
}
