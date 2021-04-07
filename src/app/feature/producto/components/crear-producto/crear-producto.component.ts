import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
  providers: [ProductoService]
})

export class CrearProductoComponent implements OnInit {
  public producto: Producto;
  public message: string;
  public horaYFecha: string;

  constructor(private productoServices: ProductoService, private router: Router) {
    this.producto = new Producto();
   }

  ngOnInit(): void {
  }

  public crear(): void {
    const d = new Date();
    const currDate = d.getDate();
    const currMonth = d.getMonth() + 1; // Months are zero based
    const currYear = d.getFullYear();
    const currHour = d.getHours();
    const currMin = d.getMinutes();
    const currSec = d.getSeconds();
    this.producto.fechaYHoraRenta = currYear + (currMonth > 9 ? '-' : '-0') + currMonth + '-' + currDate + (currHour > 9 ? ' ' : ' 0') + currHour + (currMin > 9 ? ':' : ':0') + currMin + (currSec > 9 ? ':' : ':0') + currSec;
    console.log(this.producto.fechaYHoraRenta);
    this.productoServices.guardar(this.producto).subscribe(res => {
        this.message = res + '';
        this.router.navigate(['/producto/listar']);
    });
  }
}
