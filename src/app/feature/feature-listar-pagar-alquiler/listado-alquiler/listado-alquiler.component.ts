import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alquiler } from '../../alquiler/shared/model/alquiler';
import { ListarPagarAlquilerService } from './../listar-pagar-alquiler.service';

@Component({
  selector: 'app-listado-alquiler',
  templateUrl: './listado-alquiler.component.html',
  styleUrls: ['./listado-alquiler.component.css']
})
export class ListadoAlquilerComponent implements OnInit {

  public lista: string[] = ['Alquileres Pagados' , 'Alquileres no pagados' , 'Todos los alquileres'];
	public opcionSeleccionada: any;
	public respuesta: string;
	public listaProductos: Array<Alquiler>;
	public AccionMontoBoton: ImageBitmap;
	public OcultarPago: boolean;

  constructor(private listarPagarAlquilerService: ListarPagarAlquilerService, private router: Router) {


   }

  ngOnInit(): void {
 

    this.listarPagarAlquilerService.consultarPorPagar().subscribe(res => {
    this.listaProductos = res;
    this.OcultarPago = true;
    this.router.navigate(['/listar-pagar-alquiler/lista-alquiler']);
});
}

public pagar(cedula: number): void {

  sessionStorage.setItem('cedula', JSON.stringify(cedula));
  this.router.navigate(['/listar-pagar-alquiler/pago-alquiler']);

}

onChange(e) {

if (this.opcionSeleccionada === this.lista[0]) {
  console.log(e);
  this.listarPagarAlquilerService.consultarPagados().subscribe(res => {
  this.listaProductos = res;
  this.OcultarPago = false;
  this.router.navigate(['/listar-pagar-alquiler/lista-alquiler']);
});
}

if (this.opcionSeleccionada === this.lista[1]) {
  console.log(e);
  this.listarPagarAlquilerService.consultarPorPagar().subscribe(res => {
  this.listaProductos = res;
  this.OcultarPago = true;
  this.router.navigate(['/listar-pagar-alquiler/lista-alquiler']);
});
}

if (this.opcionSeleccionada === this.lista[2]) {
  console.log(e);
  this.listarPagarAlquilerService.consultar().subscribe(res => {
  this.listaProductos = res;
  this.OcultarPago = false;
  this.router.navigate(['/listar-pagar-alquiler/lista-alquiler']);
});
}
}
}
