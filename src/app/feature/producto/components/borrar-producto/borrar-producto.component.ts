import { Router } from '@angular/router';
import { Component,  OnInit } from '@angular/core';
import { ProductoService } from '@producto/shared/service/producto.service';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.css']
})

export class BorrarProductoComponent implements OnInit {
  public total: number;
  public respuesta: string;
  public cedula: number;

  constructor(protected productoServices: ProductoService, protected router: Router) {

    if(sessionStorage.getItem('cedula')) {
      this.cedula = JSON.parse(sessionStorage.getItem('cedula'));
      this.montoAPagar(this.cedula);
    } else {
      this.cedula = this.cedula;
    }
   }
  ngOnInit() {
  }
  public montoAPagar(cedula: number) {
    this.productoServices.pagar(cedula).subscribe(res => {
      this.total = res;
      console.log(this.total);
});
}
public pagar(cedula: number) {
      this.productoServices.actualizarDatosDePago(cedula).subscribe(res => {
      this.respuesta = res + '';
      this.router.navigate(['/producto/listar']);
});
}  
}