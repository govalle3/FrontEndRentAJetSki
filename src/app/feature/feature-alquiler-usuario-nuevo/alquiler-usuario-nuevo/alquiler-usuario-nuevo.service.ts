import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsuarioAlquiler } from '../../alquiler/shared/model/usuario-alquiler';

@Injectable()

export class AlquilerUsuarioNuevoService {

    public horaYFecha: string;
	public apiServerUrl = environment.endpoint;
	public mensajeError: string;

	constructor(private http: HttpClient, protected router: Router) {
		
		const d = new Date();
		const currDate = d.getDate();
		const currMonth = d.getMonth() + 1;
		const currYear = d.getFullYear();
		const currHour = d.getHours();
		const currMin = d.getMinutes();
		const currSec = d.getSeconds();
		this.horaYFecha = currYear + (currMonth > 9 ? '-' : '-0') + currMonth + (currDate > 9 ? '-' : '-0') + currDate + (currHour > 9 ? 'T' : 'T0') + currHour + (currMin > 9 ? ':' : ':0') + currMin + (currSec > 9 ? ':' : ':0') + currSec;
	}

  public crearUsuarioAlquiler(usuarioAlquiler: UsuarioAlquiler)  {

		return this.http.post<UsuarioAlquiler>(`${this.apiServerUrl}/usuarios/alquiler`, usuarioAlquiler);

	}
}
