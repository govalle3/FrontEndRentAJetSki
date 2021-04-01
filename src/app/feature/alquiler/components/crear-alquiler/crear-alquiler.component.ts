import { Component, OnInit } from '@angular/core';
import { AlquilerUsuarioService } from "./../../shared/service/alquiler-usuario.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html',
  styleUrls: ['./crear-alquiler.component.css']
})
export class CrearAlquilerComponent implements OnInit {
  public nationalId: string;
  public idJetSki: string;
  public rentTime: number;
  public respuesta: string;
  public horaYFechaFormato: string;

  constructor(protected alquilerUsuarioService: AlquilerUsuarioService, protected router: Router) { 
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

  public crearAlquiler(cedula: string, idJetSki: string, tiempoRenta: number, horaYFechaFormato: string){
    this.alquilerUsuarioService.registrarAlquilerUsuarioExistente(cedula,idJetSki,tiempoRenta,horaYFechaFormato).subscribe(res => {
      this.respuesta = res + '';
      this.router.navigate(['/alquiler/listar-alquiler']);
  });}

}
