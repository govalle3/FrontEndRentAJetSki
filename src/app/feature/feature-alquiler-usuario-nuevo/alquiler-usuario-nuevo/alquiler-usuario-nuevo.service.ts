import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsuarioAlquiler } from '../../alquiler/shared/model/usuario-alquiler';

@Injectable()

export class AlquilerUsuarioNuevoService {

	public apiServerUrl = environment.endpoint;
	public mensajeError: string;

	constructor(private http: HttpClient, protected router: Router) {

	}

  public crearUsuarioAlquiler(usuarioAlquiler: UsuarioAlquiler)  {

		return this.http.post<UsuarioAlquiler>(`${this.apiServerUrl}/usuarios/alquiler`, usuarioAlquiler);

	}
}
