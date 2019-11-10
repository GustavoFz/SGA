import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public navCtrl: NavController, private authService: AuthService) {}
  public appPages = [
    {
      title: 'Clientes',
      url: '/consulta-cliente',
      icon: 'people'
    },
    {
      title: 'Balanças',
      url: '/consulta-balanca',
      icon: 'fitness',
      src: 'assets/icon/balanca.svg'
    },
    {
      title: 'Ferramentas',
      url: '/consulta-ferramenta',
      icon: 'construct'
    },

    {
      title: 'Realizar Aferição',
      url: '/afericao',
      icon: 'funnel',
      src: 'assets/icon/afericao.svg'
    },
    {
      title: 'Documentos',
      //url: '',
      icon: 'document'
    }
  ];

  logout() {
    this.authService.logout();
  }
}
