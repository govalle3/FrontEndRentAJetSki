import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestResponse } from '@producto/shared/model/restResponse.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alquiler } from '../../alquiler/shared/model/alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerUsuarioRegistradoService {

	public apiServerUrl = environment.endpoint;
	public mensajeError: string;

  constructor(private http: HttpClient, protected router: Router) { }

  public registrarAlquilerUsuarioExistente(alquiler: Alquiler): Observable<RestResponse> {

		return this.http.post<RestResponse>(`${this.apiServerUrl}/usuarios-registrados/alquiler`, alquiler);
	}
}
