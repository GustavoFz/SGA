import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/cliente';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-clientes',
  templateUrl: './modal-clientes.component.html',
  styleUrls: ['./modal-clientes.component.scss']
})
export class ModalClientesComponent implements OnInit, OnDestroy {
  private clientesSubscription: Subscription;
  public clientes = new Array<Cliente>();

  searchTerm: any = '';
  clientesFiltered: any;

  constructor(private clienteService: ClienteService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.clientesSubscription = this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
      this.clientesFiltered = data;
    });
  }

  setFilteredItems() {
    if (this.searchTerm) {
      this.clientesFiltered = this.clientes.filter(item => {
        return item.nome.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
    // else {
    //   this.clientesFiltered = this.clientes;
    // }
  }

  ngOnDestroy() {
    this.clientesSubscription.unsubscribe();
  }

  onClick(cliente) {
    this.modalCtrl.dismiss(cliente);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
