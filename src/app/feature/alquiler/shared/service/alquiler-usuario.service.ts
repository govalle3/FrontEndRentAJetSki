import { Alquiler } from './../model/alquiler';
import { environment } from './../../../../../environments/environment';
import { UsuarioAlquiler } from './../model/usuario-alquiler';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RestResponse } from "./../../shared/model/restResponde.model";

@Injectable()
export class AlquilerUsuarioService { 

  public horaYFecha: string;
  public apiServerUrl = environment.endpoint

  constructor(private http: HttpClient) {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var curr_hour = d.getHours();
    var curr_min = d.getMinutes();
    var curr_sec = d.getSeconds();
    this.horaYFecha = curr_year + (curr_month>9?"-":"-0") + curr_month + "-" + curr_date + (curr_hour>9?"T":"T0") +
                                    curr_hour + (curr_min>9?":":":0") + curr_min   + (curr_sec>9?":":":0") + curr_sec;

   }

   public crearUsuarioAlquiler(usuarioAlquiler: UsuarioAlquiler): Observable<RestResponse> {
    return this.http.post<RestResponse>(`${this.apiServerUrl}/usuarios/alquiler`, usuarioAlquiler);
  }

  public registrarAlquilerUsuarioExistente(nationalId: string, idJetSki: string, rentTime: number, fechaYHoraFormato: string): Observable<RestResponse> {
    return this.http.post<RestResponse>(`${this.apiServerUrl}/usuarios-registrados/alquiler?cedula=${nationalId}&idJetSki=${idJetSki}&tiempoRenta=${rentTime}&fechaYHoraRenta=${fechaYHoraFormato}`,null);
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
