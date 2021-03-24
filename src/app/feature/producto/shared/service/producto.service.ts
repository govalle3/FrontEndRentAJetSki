import { RestResponse } from './../model/restResponse.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';




@Injectable()
export class ProductoService {
  
  private horaYFecha: string;

  private apiServerUrl = environment.endpoint;

  constructor(private http: HttpClient) {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var curr_hour = d.getHours();
    var curr_min = d.getMinutes();
    var curr_sec = d.getSeconds();
    this.horaYFecha = curr_year + (curr_month>9?"-":"-0") + curr_month + "-" + curr_date + (curr_hour>9?" ":" 0") +
                                    curr_hour + (curr_min>9?":":":0") + curr_min   + ":" + curr_sec;
  

  }

  public consultar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiServerUrl}/listar`);
  }

  public guardar(producto: Producto): Observable<RestResponse> {
    return this.http.post<RestResponse>(`${this.apiServerUrl}/crear`, producto);
  }

  public pagar(cedula: number) {
    return this.http.post<boolean>(`${this.apiServerUrl}/pagar?nationalId${cedula}&dateAndTimeCheckout${this.horaYFecha}`,null);
  }

}
