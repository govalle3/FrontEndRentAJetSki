import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioAlquiler } from './../../alquiler/shared/model/usuario-alquiler';
import { AlquilerUsuarioNuevoService } from './alquiler-usuario-nuevo.service';

@Component({
  selector: 'app-alquiler-usuario-nuevo',
  templateUrl: './alquiler-usuario-nuevo.component.html',
  styleUrls: ['./alquiler-usuario-nuevo.component.css']

})
export class AlquilerUsuarioNuevoComponent implements OnInit {

    public usuarioAlquiler: UsuarioAlquiler;
	public respuesta: any;
	public horaYFecha: string;

  constructor(protected alquilerUsuarioNuevoService: AlquilerUsuarioNuevoService, protected router: Router) {

    this.usuarioAlquiler = new UsuarioAlquiler();

   }

  ngOnInit() {
  }

  public crearUsuarioAlquiler() {

		const d = new Date();
		const currDate = d.getDate();
		const currMonth = d.getMonth() + 1;
		const currYear = d.getFullYear();
		const currHour = d.getHours();
		const currMin = d.getMinutes();
		const currSec = d.getSeconds();
		this.usuarioAlquiler.fechaYHoraRenta = currYear + (currMonth > 9 ? '-' : '-0') + currMonth +
		(currDate > 9 ? '-' : '-0') + currDate + (currHour > 9 ? ' ' : ' 0') + currHour + (currMin > 9 ? ':' : ':0') + currMin + (currSec > 9 ? ':' : ':0') + currSec;

		this.alquilerUsuarioNuevoService.crearUsuarioAlquiler(this.usuarioAlquiler).subscribe(res => {
			this.respuesta = res;
			this.router.navigate(['/listar-pagar-alquiler/lista-alquiler']);})

	}
}
