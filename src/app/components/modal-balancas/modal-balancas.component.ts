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
  balancaService: any;
  constructor(navParams: NavParams, balancaService: BalancaService) {
    this.clienteIdd = navParams.get('clienteId');
  }

  ngOnInit() {
  }
}
