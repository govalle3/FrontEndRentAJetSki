import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)

  
export class ManejadorErrorService {
  
  public subject = new Subject<string>();
  
  

  constructor() {
    
   }

   generarEventoMensajeError(mensaje: string) {
     this.subject.next(mensaje);
   }
}
