import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Producto[]>(`${environment.endpoint}/alquiler/listar`, 
                                               this.http.optsName('consultar alquileres'));
  }

  public guardar(producto: Producto) {
    return this.http.doPost<Producto, boolean>(`${environment.endpoint}/alquiler/crear`, producto,
                                                this.http.optsName('crear/actualizar alquiler'));
  }

  public pagar(producto: Producto) {
    return this.http.doPost<Producto, Float32Array>(`${environment.endpoint}/alquiler/pagar`, producto,
                                                this.http.optsName('pagar alquiler'));
  }

  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.nationalId}`,
                                                 this.http.optsName('eliminar productos'));
  }

}
