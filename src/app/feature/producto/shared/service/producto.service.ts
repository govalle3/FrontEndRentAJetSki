import { RestResponse } from './../model/restResponse.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  public nationalId: number;
  public idJetSki: string;
  public rentTime: number;
  public horaYFechaFormato: string;

  private apiServerUrl = environment.endpoint;

  constructor(private http: HttpClient) {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var curr_hour = d.getHours();
    var curr_min = d.getMinutes();
    var curr_sec = d.getSeconds();
    this.horaYFechaFormato = curr_year + (curr_month>9?"-":"-0") + curr_month + "-" + curr_date + (curr_hour>9?"T":"T0") +
                                    curr_hour + (curr_min>9?":":":0") + curr_min   + (curr_sec>9?":":":0") + curr_sec;

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
    return this.http.post<number>(`${this.apiServerUrl}/usuario/monto?cedula=${cedula}&fechaYHoraEntrega=${this.horaYFechaFormato}`,null);
  }

  public actualizarDatosDePago(cedula: number): Observable<RestResponse> {
   return this.http.put<RestResponse>(`${this.apiServerUrl}/usuario/pago?cedula=${cedula}`,null);
  }

  public registrarAlquilerExistente(nationalId: number, idJetSki: string, rentTime: number): Observable<RestResponse> {
    return this.http.post<RestResponse>(`${this.apiServerUrl}/usuarios-registrados/alquiler?nationalId=${nationalId}&idJetSki=${idJetSki}&rentTime=${rentTime}&dateAndTimeRent=${this.horaYFechaFormato}`,null);
  }

}
