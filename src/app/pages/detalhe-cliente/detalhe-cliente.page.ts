import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.page.html',
  styleUrls: ['./detalhe-cliente.page.scss']
})
export class DetalheClientePage implements OnInit {
  private clienteId: string = null;
  private clientesSubscription: Subscription;
  public cliente: Cliente = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    public navCtrl: NavController
  ) {
    this.clienteId = this.activatedRoute.snapshot.params['id'];
    if (this.clienteId) {
      this.loadCliente();
    }
  }

  ngOnInit() {}

  back() {
    this.navCtrl.back();
  }

  loadCliente() {
    this.clientesSubscription = this.clienteService.getCliente(this.clienteId).subscribe(data => {
      this.cliente = data;
    });
  }
}
