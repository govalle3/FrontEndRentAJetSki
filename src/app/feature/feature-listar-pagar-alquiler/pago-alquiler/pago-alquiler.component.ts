import { Component, OnInit } from '@angular/core';
import { AlquilerUsuarioService } from './../../alquiler/shared/service/alquiler-usuario.service';

@Component({
  selector: 'app-pago-alquiler',
  templateUrl: './pago-alquiler.component.html',
  styleUrls: ['./pago-alquiler.component.css']
})
export class PagoAlquilerComponent implements OnInit {

  constructor(protected alquilerUsuarioService: AlquilerUsuarioService) { }

  ngOnInit(): void {
  }

}
