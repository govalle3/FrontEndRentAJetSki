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
  public horaYFechaFormato: string;

  constructor(protected productoServices: ProductoService, protected router: Router) {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var curr_hour = d.getHours();
    var curr_min = d.getMinutes();
    var curr_sec = d.getSeconds();
    this.horaYFechaFormato = curr_year + (curr_month>9?"-":"-0") + curr_month + "-" + curr_date + (curr_hour>9?"T":"T0") +
                                    curr_hour + (curr_min>9?":":":0") + curr_min   + (curr_sec>9?":":":0") + curr_sec;
   }

  ngOnInit(): void {
  }

  public crearAlquiler(cedula: number, idJetSki: string, tiempoRenta: number, horaYFechaFormato: string){
    this.productoServices.registrarAlquilerExistente(cedula,idJetSki,tiempoRenta,horaYFechaFormato).subscribe(res => {
      this.respuesta = res + '';
      this.router.navigate(['/producto/listar']);
  });}

  
}
