import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ferramenta } from 'src/app/interfaces/ferramenta';
import { FerramentaService } from 'src/app/services/ferramenta.service';

@Component({
  selector: 'app-consulta-ferramenta',
  templateUrl: './consulta-ferramenta.page.html',
  styleUrls: ['./consulta-ferramenta.page.scss']
})
export class ConsultaFerramentaPage implements OnInit, OnDestroy {
  private ferramentasSubscription: Subscription;
  public ferramentas = new Array<Ferramenta>();

  searchTerm: any = '';
  ferramentasFiltered: any;

  constructor(private ferramentaService: FerramentaService) {}
  ngOnInit() {
    this.ferramentasSubscription = this.ferramentaService.getFerramentas().subscribe(data => {
      this.ferramentas = data;
      this.ferramentasFiltered = data;
    });
  }

  setFilteredItems() {
    if (this.searchTerm) {
      this.ferramentasFiltered = this.ferramentas.filter(item => {
        return item.id.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
    // else {
    //   this.ferramentasFiltered = this.ferramentas;
    // }
  }
  ngOnDestroy() {
    this.ferramentasSubscription.unsubscribe();
  }
}
