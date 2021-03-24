import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";

import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  public listaProductos: Array<Producto>;

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.productoService.consultar().subscribe(res => {
      this.listaProductos = res;
    });
  }

  public pagar(): void{
    this.router.navigate(['/BorrarProductoComponent'])
  }

}
 