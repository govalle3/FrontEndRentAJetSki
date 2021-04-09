import { Component, OnInit } from '@angular/core';
import { AlquilerUsuarioService } from './../../shared/service/alquiler-usuario.service';
import { Router } from '@angular/router';
import { Alquiler } from './../../shared/model/alquiler';

@Component({
	selector: 'app-crear-alquiler',
	templateUrl: './crear-alquiler.component.html',
	styleUrls: ['./crear-alquiler.component.css']
})

export class CrearAlquilerComponent implements OnInit {
	
	public respuesta: any;
	public alquiler: Alquiler;

	constructor(protected alquilerUsuarioService: AlquilerUsuarioService, protected router: Router) {
		this.alquiler = new Alquiler();
		const d = new Date();
		const currDate = d.getDate();
		const currMonth = d.getMonth() + 1;
		const currYear = d.getFullYear();
		const currHour = d.getHours();
		const currMin = d.getMinutes();
		const currSec = d.getSeconds();
		this.alquiler.fechaYHoraRenta = currYear + (currMonth > 9 ? '-' : '-0') + currMonth + (currDate > 9 ? '-' : '-0') + currDate + (currHour > 9 ? ' ' : 'T0') + currHour + (currMin > 9 ? ':' : ':0') + currMin + (currSec > 9 ? ':' : ':0') + currSec;
	}

	ngOnInit(): void {
	}

	public crearAlquiler() {

		this.alquilerUsuarioService.registrarAlquilerUsuarioExistente(this.alquiler).subscribe(res => {
		this.respuesta = res;
		this.router.navigate(['/alquiler/listar-alquiler']);
// asi va sin el flujo del error
	}); 
}
}
