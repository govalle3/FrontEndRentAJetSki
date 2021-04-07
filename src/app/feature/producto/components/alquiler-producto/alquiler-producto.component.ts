import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '@producto/shared/service/producto.service';

@Component({
  selector: 'app-alquiler-producto',
  templateUrl: './alquiler-producto.component.html',
  styleUrls: ['./alquiler-producto.component.css']
})

export class AlquilerProductoComponent implements OnInit {
  public nationalId: number;
  public idJetSki: string;
  public rentTime: number;
  public respuesta: string;
  public horaYFechaFormato: string;

  constructor(protected productoServices: ProductoService, protected router: Router) {
    const d = new Date();
    const currDate = d.getDate();
    const currMonth = d.getMonth() + 1; // Months are zero based
    const currYear = d.getFullYear();
    const currHour = d.getHours();
    const currMin = d.getMinutes();
    const currSec = d.getSeconds();
    this.horaYFechaFormato = currYear + (currMonth > 9 ? '-' : '-0') + currMonth + '-' + currDate + (currHour > 9 ? 'T' : 'T0') + currHour + (currMin > 9 ? ':' : ':0') + currMin + (currSec > 9 ? ':' : ':0') + currSec;
   }

  ngOnInit(): void {
  }

  public crearAlquiler() {
    this.productoServices.registrarAlquilerExistente().subscribe(res => {
      this.respuesta = res + '';
      this.router.navigate(['/producto/listar']);
  }); }
}
