import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public navCtrl: NavController) {}
  public appPages = [
    {
      title: 'Clientes',
      url: '/consulta-cliente',
      icon: 'people'
    },
    {
      title: 'Ferramentas',
      url: '/consulta-ferramenta',
      icon: 'list'
    },
    {
      title: 'Balanças',
      url: '/consulta-balanca',
      icon: 'list'
    },
    {
      title: 'Realizar aferição',
      url: '/afericao',
      icon: 'list'
    }
  ];

  backLogin() {
    this.navCtrl.navigateRoot('/login');
  }
}
