import { NgModule } from '@angular/core';
import { PagoAlquilerComponent } from './pago-alquiler/pago-alquiler.component';
import { ListadoAlquilerComponent } from './listado-alquiler/listado-alquiler.component';
import { ListarPagarAlquilerRoutingModule } from './listar-pagar-alquiler-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ListarPagarAlquilerService } from './listar-pagar-alquiler.service';

@NgModule({
  declarations: [
    
    PagoAlquilerComponent,
    ListadoAlquilerComponent
  ],

  imports: [
  
ListarPagarAlquilerRoutingModule,
  SharedModule,
  FormsModule
  ],

  providers: [ListarPagarAlquilerService]
})
export class ListarPagarAlquilerModule { }
