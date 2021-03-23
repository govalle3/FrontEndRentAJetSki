import { RestResponse } from './../model/restResponse.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {
  private apiServerUrl = environment.endpoint;


  constructor(protected http: HttpClient) {}


  public consultar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiServerUrl}/listar`);
  }

  public guardar(producto: Producto): Observable<RestResponse> {
    return this.http.post<RestResponse>(`${this.apiServerUrl}/crear`, producto);
  }

  public pagar(producto: Producto) {
    return this.http.post<Producto>(`${this.apiServerUrl}/pagar?nationaliD${producto.nationalId}`,null);
  }

}
