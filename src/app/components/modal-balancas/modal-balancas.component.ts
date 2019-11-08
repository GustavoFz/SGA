import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { BalancaService } from 'src/app/services/balanca.service';
import { Balanca } from 'src/app/interfaces/balanca';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-balancas',
  templateUrl: './modal-balancas.component.html',
  styleUrls: ['./modal-balancas.component.scss']
})
export class ModalBalancasComponent implements OnInit, OnDestroy {
  private balancasSubscription: Subscription;
  public balancas = new Array<Balanca>();

  searchTerm: any = '';
  balancasFiltered: any;

  clienteIdd = null;
  @Input() balancaId: string;

  constructor(
    private balancaService: BalancaService,
    private navParams: NavParams,

    private modalCtrl: ModalController
  ) {
    this.clienteIdd = navParams.get('clienteId');
  }
  ngOnInit() {
    this.balancasSubscription = this.balancaService.getBalancas().subscribe(data => {
      this.balancas = data;
      this.balancasFiltered = data;
    });
  }

  setFilteredItems() {
    if (this.searchTerm) {
      this.balancasFiltered = this.balancas.filter(item => {
        return item.modelo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
    // else {
    //   this.balancasFiltered = this.balancas;
    // }
  }

  ngOnDestroy() {
    this.balancasSubscription.unsubscribe();
  }

  onClick(balanca) {
    this.modalCtrl.dismiss(balanca);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
