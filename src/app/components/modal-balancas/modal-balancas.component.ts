import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { BalancaService } from 'src/app/services/balanca.service';

@Component({
  selector: 'app-modal-balancas',
  templateUrl: './modal-balancas.component.html',
  styleUrls: ['./modal-balancas.component.scss']
})
export class ModalBalancasComponent implements OnInit {
  clienteIdd = null;
  @Input() clienteId: string;
  constructor(navParams: NavParams, balancaService: BalancaService) {
    this.clienteIdd = navParams.get('clienteId');
    console.log(this.clienteIdd);
    console.log(balancaService.getBalancasByCliente(this.clienteIdd));
  }

  ngOnInit() {
    console.log(this.getBalancaById(this.clienteIdd));
  }

  async getBalancaById(id) {
    await this.balancaService.getBalancasByCliente(id);
  }
}
