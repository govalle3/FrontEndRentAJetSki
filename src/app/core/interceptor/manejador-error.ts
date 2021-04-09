import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HTTP_ERRORES_CODIGO } from './http-codigo-error';
import { ManejadorErrorService } from './../../shared/manejador-error.service';


@Injectable()
export class ManejadorError implements ErrorHandler {
  constructor(protected manejadorErrorService: ManejadorErrorService) {}

  
  handleError(error: string | Error): void {
    
    const mensajeError = this.mensajePorDefecto(error);
    this.manejadorErrorService.generarEventoMensajeError(mensajeError);
    this.imprimirErrorConsola(mensajeError);
  }

// errores A NIVEL GENERAL DE LA APP
  private mensajePorDefecto(error) {

    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        return HTTP_ERRORES_CODIGO.NO_HAY_INTERNET;
      }
      if (error.hasOwnProperty('status') && !error.error.hasOwnProperty('mensaje')) {

        return error.error.message;
      }

    }
    return error;
  }

  private imprimirErrorConsola(mensaje): void {
    const respuesta = {
      fecha: new Date().toLocaleString(),
      path: window.location.href,
      mensaje,
    };
    if (!environment.production) {
      window.console.error('Error inesperado:\n', respuesta);
    }
  }

  public obtenerErrorHttpCode(httpCode: number): string {
    if (HTTP_ERRORES_CODIGO.hasOwnProperty(httpCode)) {
      return HTTP_ERRORES_CODIGO.PETICION_FALLIDA;
    }
    return HTTP_ERRORES_CODIGO[httpCode];
  }
}
