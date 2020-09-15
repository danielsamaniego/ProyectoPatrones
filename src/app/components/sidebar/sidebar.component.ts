import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Envíos Realizados',  icon: 'shopping_box', class: '' },
    { path: '/cotizador', title: 'Cotizar',  icon:'shopping_delivery-fast', class: '' },
    { path: '/paises_origen', title: 'Paises Origen',  icon:'education_agenda-bookmark', class: '' },
    { path: '/paises_destino', title: 'Paises Destino',  icon:'education_agenda-bookmark', class: '' },
    { path: '/ganancias_envio', title: 'Ganancias de Envío',  icon:'education_agenda-bookmark', class: '' },
    { path: '/contenido_envios', title: 'Contenido de Envíos',  icon:'education_agenda-bookmark', class: '' },
    

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
