
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlquilerUsuarioService } from './../../shared/service/alquiler-usuario.service';
import { UsuarioAlquiler } from "./../../shared/model/usuario-alquiler";

@Component({
  selector: 'app-crear-usuario-alquiler',
  templateUrl: './crear-usuario-alquiler.component.html',
  styleUrls: ['./crear-usuario-alquiler.component.css'],
  providers: [AlquilerUsuarioService]
})
export class CrearUsuarioAlquilerComponent implements OnInit {
  public usuarioAlquiler: UsuarioAlquiler;
  public message: string;
  public horaYFecha: string;

  constructor(private alquilerUsuarioSerivce: AlquilerUsuarioService, private router: Router) {

    this.usuarioAlquiler = new UsuarioAlquiler();

   }


  ngOnInit(): void {
  }

  public crearUsuarioAlquiler(): void { 
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var curr_hour = d.getHours();
    var curr_min = d.getMinutes();
    var curr_sec = d.getSeconds();
    this.usuarioAlquiler.fechaYHoraRenta = curr_year + (curr_month>9?"-":"-0") + curr_month + (curr_date>9?"-":"-0") + curr_date + (curr_hour>9?" ":" 0") +
                                    curr_hour + (curr_min>9?":":":0") + curr_min   + (curr_sec>9?":":":0") + curr_sec;  
    console.log(this.usuarioAlquiler);

    this.alquilerUsuarioSerivce.crearUsuarioAlquiler(this.usuarioAlquiler).subscribe(res => {
     
        this.message = res + '';
        this.router.navigate(['/alquiler/listar-alquiler']);

    });

  }

}
