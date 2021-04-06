
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlquilerUsuarioService } from './../../shared/service/alquiler-usuario.service';
import { UsuarioAlquiler } from './../../shared/model/usuario-alquiler';

@Component({

	selector: 'app-crear-usuario-alquiler',
	templateUrl: './crear-usuario-alquiler.component.html',
	styleUrls: ['./crear-usuario-alquiler.component.css'],
	providers: [AlquilerUsuarioService]

})

export class CrearUsuarioAlquilerComponent implements OnInit {

	public usuarioAlquiler: UsuarioAlquiler;

	public message: any;

	public horaYFecha: string;

	public esValido: boolean = true;


	constructor(private alquilerUsuarioSerivce: AlquilerUsuarioService, private router: Router) {

		this.usuarioAlquiler = new UsuarioAlquiler();

	 }

	ngOnInit(): void {

	}

	public crearUsuarioAlquiler(): void {

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
			if(res.responseCode = '500') {

				this.message = res.message;
				this.esValido = true;

			}
	    this.message = res;
		console.log(this.message);
		this.router.navigate(['/alquiler/listar-alquiler']);
		});
	}
}
