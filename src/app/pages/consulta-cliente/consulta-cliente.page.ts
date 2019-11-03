import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.page.html',
  styleUrls: ['./consulta-cliente.page.scss']
})
export class ConsultaClientePage implements OnInit {
  private clientesSubscription: Subscription;
  public clientes = new Array<Cliente>();

  searchTerm: any = '';
  jsonData: any;

  constructor(private clienteService: ClienteService) {
    this.clientesSubscription = this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }
  ionViewDidLoad() {
    this.setFilteredItems();
  }

  filterItems(searchTerm) {
    return this.clientes.filter(item => {
      return item.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  ngOnInit() {
    this.setFilteredItems();
  }
  setFilteredItems() {
    this.jsonData = this.filterItems(this.searchTerm);
  }
  ngOnDestroy() {
    this.clientesSubscription.unsubscribe();
  }
}
