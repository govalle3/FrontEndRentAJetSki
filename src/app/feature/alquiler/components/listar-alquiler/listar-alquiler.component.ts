import { Router } from '@angular/router';
import { Alquiler } from './../../shared/model/alquiler';
import { Component, OnInit } from '@angular/core';
import { AlquilerUsuarioService } from "./../../shared/service/alquiler-usuario.service";

@Component({
  selector: 'app-listar-alquiler',
  templateUrl: './listar-alquiler.component.html',
  styleUrls: ['./listar-alquiler.component.css']
})
export class ListarAlquilerComponent implements OnInit {
  public tiposDeLista: string;
  public lista:string[]=["Alquileres Pagados","Alquileres no pagados","Todos los alquileres"];
  public opcionSeleccionada: string  = "";
  public respuesta: string;
  public listaProductos: Array<Alquiler>;
  public img: ImageBitmap;

  constructor(private alquilerUSuarioService: AlquilerUsuarioService, private router: Router) { 

  }

  ngOnInit(): void {
    

    this.alquilerUSuarioService.consultar().subscribe(res => {
      this.listaProductos = res;
      this.router.navigate(['/alquiler/listar-alquiler']);
  });

  }

public pagar(cedula: number): void{
    sessionStorage.setItem('cedula',JSON.stringify(cedula));
    this.router.navigate(['/alquiler/pagar-alquiler'])
  }

  onChange(e){
    if(this.opcionSeleccionada == this.lista[0]){
      console.log(e);
      this.alquilerUSuarioService.consultarPagados().subscribe(res => {
        this.listaProductos = res;
        
        this.router.navigate(['/alquiler/listar-alquiler']);
    });}

    if(this.opcionSeleccionada == this.lista[1]){
      console.log(e);
      this.alquilerUSuarioService.consultarPorPagar().subscribe(res => {
        this.listaProductos = res;
        this.router.navigate(['/alquiler/listar-alquiler']);

    });
    }
    if(this.opcionSeleccionada == this.lista[2]){
      console.log(e);
      this.alquilerUSuarioService.consultar().subscribe(res => {
        this.listaProductos = res;
        this.router.navigate(['/alquiler/listar-alquiler']);
    });
    }
  }
}
 
