import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app-base';
  
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Inicio' },
    { url: '/alquiler-lazy', nombre: 'Rentar Jet Ski'},
    { url: '/listar-pagar-alquiler/lista-alquiler', nombre: 'Listar Jet Ski'}
  ];
}
