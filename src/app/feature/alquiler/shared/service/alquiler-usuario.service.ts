import { Alquiler } from './../model/alquiler';
import { environment } from './../../../../../environments/environment';
import { UsuarioAlquiler } from './../model/usuario-alquiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestResponse } from './../../shared/model/restResponde.model';

@Injectable()
export class AlquilerUsuarioService {
	public horaYFecha: string;
	public apiServerUrl = environment.endpoint;

	constructor(private http: HttpClient) {

		const d = new Date();
		const currDate = d.getDate();
		const currMonth = d.getMonth() + 1;
		const currYear = d.getFullYear();
		const currHour = d.getHours();
		const currMin = d.getMinutes();
		const currSec = d.getSeconds();
		this.horaYFecha = currYear + (currMonth > 9 ? '-' : '-0') + currMonth + (currDate > 9 ? '-' : '-0') + currDate + (currHour > 9 ? 'T' : 'T0') + currHour + (currMin > 9 ? ':' : ':0') + currMin + (currSec > 9 ? ':' : ':0') + currSec;
	}

	 public crearUsuarioAlquiler(usuarioAlquiler: UsuarioAlquiler): Observable<RestResponse> {

		return this.http.post<RestResponse>(`${this.apiServerUrl}/usuarios/alquiler`, usuarioAlquiler);

	}

	public registrarAlquilerUsuarioExistente(alquiler: Alquiler): Observable<RestResponse> {

		return this.http.post<RestResponse>(`${this.apiServerUrl}/usuarios-registrados/alquiler`,alquiler);
	}

	public consultar(): Observable<Alquiler[]> {

		return this.http.get<Alquiler[]>(`${this.apiServerUrl}/alquiler`);

	}

	public consultarPorPagar(): Observable<Alquiler[]> {

		return this.http.get<Alquiler[]>(`${this.apiServerUrl}/alquiler/por-pago`);

	}

	public consultarPagados(): Observable<Alquiler[]> {

		return this.http.get<Alquiler[]>(`${this.apiServerUrl}/alquiler/pagados`);

	}

	public pagar(cedula: number): Observable<number> {

		return this.http.post<number>(`${this.apiServerUrl}/usuario/monto?cedula=${cedula}&fechaYHoraEntrega=${this.horaYFecha}`,null);

	}

	public actualizarDatosDePago(cedula: number): Observable<RestResponse> {

	 return this.http.put<RestResponse>(`${this.apiServerUrl}/usuario/pago?cedula=${cedula}`,null);
	 
	}
}
