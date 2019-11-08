import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.page.html',
  styleUrls: ['./consulta-cliente.page.scss']
})
export class ConsultaClientePage implements OnInit, OnDestroy {
  private clientesSubscription: Subscription;
  public clientes = new Array<Cliente>();

  searchTerm: any = '';
  clientesFiltered: any;

  constructor(private clienteService: ClienteService) {}
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
}
