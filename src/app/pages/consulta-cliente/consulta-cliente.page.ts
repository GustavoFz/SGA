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

  constructor(private clienteService: ClienteService) {
    this.clientesSubscription = this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.clientesSubscription.unsubscribe();
  }
}
