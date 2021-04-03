import { AlquilerUsuarioService } from './../../shared/service/alquiler-usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagar-alquiler',
  templateUrl: './pagar-alquiler.component.html',
  styleUrls: ['./pagar-alquiler.component.css']
})

export class PagarAlquilerComponent implements OnInit {

  public total: number;
  public respuesta: string;
  public cedula: number;

  constructor(protected alquilerUsuarioService: AlquilerUsuarioService, protected router: Router) {

    if(sessionStorage.getItem("cedula")){
      this.cedula = JSON.parse(sessionStorage.getItem("cedula"));
      this.traerDatosParaPago(this.cedula);
    } else {
      this.cedula = this.cedula;
    }
 }

ngOnInit(): void {

  }

  public traerDatosParaPago(cedula: number) {
    this.alquilerUsuarioService.pagar(cedula).subscribe(res => {
    this.total = res;
    console.log(this.total); 
  });
}

  public pagar(cedula: number) {
    this.alquilerUsuarioService.actualizarDatosDePago(cedula).subscribe(res => {
    this.respuesta = res + '';
    this.router.navigate(['/alquiler/listar-alquiler']);
  });
}  }
