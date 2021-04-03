import { RestResponse } from './../model/restResponse.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable()
export class ProductoService {

  public horaYFechaFormato: string;
  private apiServerUrl = environment.endpoint;

  constructor(private http: HttpClient) {
    const d = new Date();
    const currDate = d.getDate();
    const currMonth = d.getMonth() + 1; //Months are zero based
    const currYear = d.getFullYear();
    const currHour = d.getHours();
    const currMin = d.getMinutes();
    const currSec = d.getSeconds();
    this.horaYFechaFormato = currYear + (currMonth > 9 ? "-" : "-0") + currMonth + "-" + currDate + (currHour > 9 ? "T" : "T0") + currHour + (currMin > 9 ? ":" : ":0") + currMin + (currSec > 9 ? ":" : ":0") + currSec;
  }

  public consultar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiServerUrl}/alquiler`);
  }

  public consultarPorPagar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiServerUrl}/alquiler/por-pago`);
  }

  public consultarPagados(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiServerUrl}/alquiler/pagados`);
  }

  public guardar(producto: Producto): Observable<RestResponse> {
    return this.http.post<RestResponse>(`${this.apiServerUrl}/usuarios/alquiler`, producto);
  }

  public pagar(cedula: number): Observable<number> {
    return this.http.post<number>(`${this.apiServerUrl}/usuario/monto?cedula=${cedula}&fechaYHoraEntrega=${this.horaYFechaFormato}`, null);
  }

  public actualizarDatosDePago(cedula: number): Observable<RestResponse> {
   return this.http.put<RestResponse>(`${this.apiServerUrl}/usuario/pago?cedula=${cedula}`, null);
  }

  public registrarAlquilerExistente() {
    return this.http.post<RestResponse>(`${this.apiServerUrl}
    /usuarios-registrados/alquiler?cedula=$`, null);
  }
}
