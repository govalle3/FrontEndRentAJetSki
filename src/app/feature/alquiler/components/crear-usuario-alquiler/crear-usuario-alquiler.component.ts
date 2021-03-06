import { Component, OnInit } from '@angular/core';

import { AlquilerUsuarioService } from './../../shared/service/alquiler-usuario.service';
import { UsuarioAlquiler } from './../../shared/model/usuario-alquiler';
import { Router } from '@angular/router';

@Component({

	selector: 'app-crear-usuario-alquiler',
	templateUrl: './crear-usuario-alquiler.component.html',
	styleUrls: ['./crear-usuario-alquiler.component.css'],
	providers: [AlquilerUsuarioService]

})

export class CrearUsuarioAlquilerComponent implements OnInit {

	public usuarioAlquiler: UsuarioAlquiler;
	public respuesta: any;
	public horaYFecha: string;

	constructor(private alquilerUsuarioSerivce: AlquilerUsuarioService, protected router: Router) {

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

		this.alquilerUsuarioSerivce.crearUsuarioAlquiler(this.usuarioAlquiler).subscribe(res => {
			this.respuesta = res;
			this.router.navigate(['/alquiler/listar-alquiler']);})

	}

}
