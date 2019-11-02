import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor() {}
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Cadastro de clientes',
      url: '/cadastro-cliente',
      icon: 'person-add'
    },
    {
      title: 'Cadastro de balanças',
      url: '/cadastro-balanca',
      icon: 'list'
    },
    {
      title: 'Cadastro de ferramentas',
      url: '/cadastro-ferramenta',
      icon: 'construct'
    },
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
}
