import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ProductoService } from '../../shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';
import { OK } from '@producto/shared/model/httpstatus';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
  providers: [ProductoService]
})
export class CrearProductoComponent implements OnInit {
  public producto: Producto;
  public message: string = "";
  
  constructor(protected productoServices: ProductoService, private router: Router) {
    this.producto = new Producto();
   }

  ngOnInit(): void {
  
  }

  public crear(): void {
    
    this.productoServices.guardar(this.producto).subscribe(res => {

      if(res.responseCode == OK){

        this.router.navigate(['/ListarProductoComponent']);

      }else {

        this.message = res.message;

      }
    });
  }

}
