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
  public nationalId: number;

  
  constructor(protected productoServices: ProductoService, protected router: Router) {

    if(sessionStorage.getItem("nationalId")){
      this.nationalId = JSON.parse(sessionStorage.getItem("nationalId"));
      this.traerDatosParaPago(this.nationalId);
    }else{
      this.nationalId = this.nationalId;
    }
  
   }

  ngOnInit() {
    
    
  }

  /**
   * traerDatosParaPago
   */
  public traerDatosParaPago(nationalId: number) {
    this.productoServices.pagar(nationalId).subscribe(res => {
      this.total = res;
      console.log(this.total);
      
  });}

    /**
   * actualizarDatosPagado
   */
     public actualizarDatosPagado(nationalId: number) {
      this.productoServices.actualizarDatosDePago(nationalId).subscribe(res => {
        this.respuesta = res + '';
        this.router.navigate(['/producto/listar']);
    });}  
}
