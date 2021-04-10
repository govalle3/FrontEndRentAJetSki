import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestResponse } from '@producto/shared/model/restResponse.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alquiler } from '../alquiler/shared/model/alquiler';

@Injectable({
  providedIn: 'root'
})
export class ListarPagarAlquilerService {

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

		return this.http.post<number>(`${this.apiServerUrl}/usuario/monto?cedula=${cedula}&fechaYHoraEntrega=${this.horaYFecha}`, null);

	}

	public actualizarDatosDePago(cedula: number): Observable<RestResponse> {

	 return this.http.put<RestResponse>(`${this.apiServerUrl}/usuario/pago?cedula=${cedula}`, null);

	}
}
