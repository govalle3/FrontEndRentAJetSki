import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(

)

  
export class ManejadorErrorService {
  
  private subject = new Subject<string>();
  public subjectObservable = this.subject.asObservable();
  

  constructor() {
    
   }

   generarEventoMensajeError(mensaje: string) {
     this.subject.next(mensaje);
   }
}
