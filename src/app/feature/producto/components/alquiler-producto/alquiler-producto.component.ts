import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from "@producto/shared/service/producto.service";

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

  constructor(protected productoServices: ProductoService, protected router: Router) { }

  ngOnInit(): void {
  }

  public crearAlquiler(nationalId: number, idJetSki: string, rentTime: number){
    this.productoServices.registrarAlquilerExistente(nationalId,idJetSki,rentTime).subscribe(res => {
      this.respuesta = res + '';
      this.router.navigate(['/producto/listar']);
  });}

  
}
