import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})

export class ListarProductoComponent implements OnInit {
  public tiposDeLista: string;
  public lista:string[] = ['Alquileres Pagados', 'Alquileres no pagados', 'Todos los alquileres'];
  public opcionSeleccionada: string;
  public respuesta: string;
  public listaProductos: Array<Producto>;
  public img: ImageBitmap;
  constructor(private productoService: ProductoService, private router: Router) {
   }

ngOnInit() {
    this.loadUsers();
}
  private loadUsers(): void {
    this.productoService.consultar().subscribe(res => {
      this.listaProductos = res;
    });
}
  public pagar(cedula: number): void {
    sessionStorage.setItem('cedula',JSON.stringify(cedula));
    this.router.navigate(['/producto/borrar'])
}
  onChange(e) {
    if(this.opcionSeleccionada == this.lista[0]){
      console.log(e);
      this.productoService.consultarPagados().subscribe(res => {
        this.listaProductos = res;
        this.router.navigate(['/producto/listar']);
  });
}
  if(this.opcionSeleccionada == this.lista[1]) {
      console.log(e);
      this.productoService.consultarPorPagar().subscribe(res => {
        this.listaProductos = res;
        this.router.navigate(['/producto/listar']);
    });
  }
    if(this.opcionSeleccionada == this.lista[2]) {
      console.log(e);
      this.productoService.consultar().subscribe(res => {
        this.listaProductos = res;
        this.router.navigate(['/producto/listar']);
    });
    }
  }
}
 