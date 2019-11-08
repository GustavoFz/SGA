import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ferramenta } from 'src/app/interfaces/ferramenta';
import { Subscription } from 'rxjs';
import { FerramentaService } from 'src/app/services/ferramenta.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ferramentas',
  templateUrl: './modal-ferramentas.component.html',
  styleUrls: ['./modal-ferramentas.component.scss']
})
export class ModalFerramentasComponent implements OnInit, OnDestroy {
  private ferramentasSubscription: Subscription;
  public ferramentas = new Array<Ferramenta>();

  searchTerm: any = '';
  ferramentasFiltered: any;

  constructor(private ferramentaService: FerramentaService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.ferramentasSubscription = this.ferramentaService.getFerramentas().subscribe(data => {
      this.ferramentas = data;
      this.ferramentasFiltered = data;
    });
  }

  setFilteredItems() {
    if (this.searchTerm) {
      this.ferramentasFiltered = this.ferramentas.filter(item => {
        return item.nome.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
    // else {
    //   this.ferramentasFiltered = this.ferramentas;
    // }
  }

  ngOnDestroy() {
    this.ferramentasSubscription.unsubscribe();
  }

  onClick(ferramenta) {
    this.modalCtrl.dismiss(ferramenta);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
