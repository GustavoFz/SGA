import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Balanca } from 'src/app/interfaces/balanca';
import { BalancaService } from 'src/app/services/balanca.service';

@Component({
  selector: 'app-consulta-balanca',
  templateUrl: './consulta-balanca.page.html',
  styleUrls: ['./consulta-balanca.page.scss']
})
export class ConsultaBalancaPage implements OnInit, OnDestroy {
  private balancasSubscription: Subscription;
  public balancas = new Array<Balanca>();

  searchTerm: any = '';
  balancasFiltered: any;

  constructor(private balancaService: BalancaService) {}
  ngOnInit() {
    this.balancasSubscription = this.balancaService.getBalancas().subscribe(data => {
      this.balancas = data;
      this.balancasFiltered = data;
    });
  }

  setFilteredItems() {
    if (this.searchTerm) {
      this.balancasFiltered = this.balancas.filter(item => {
        return item.id.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
    // else {
    //   this.clientesFiltered = this.clientes;
    // }
  }
  ngOnDestroy() {
    this.balancasSubscription.unsubscribe();
  }
}
