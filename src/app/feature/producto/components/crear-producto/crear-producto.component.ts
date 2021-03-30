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
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var curr_hour = d.getHours();
    var curr_min = d.getMinutes();
    var curr_sec = d.getSeconds();
    this.producto.dateAndTimeRent = curr_year + (curr_month>9?"-":"-0") + curr_month + "-" + curr_date + (curr_hour>9?" ":" 0") +
                                    curr_hour + (curr_min>9?":":":0") + curr_min   + (curr_sec>9?":":":0") + curr_sec;  
    console.log(this.producto.dateAndTimeRent);
    this.productoServices.guardar(this.producto).subscribe(res => {
     
        this.message = res + '';
        this.router.navigate(['/producto/listar']);

    });

  }

}
