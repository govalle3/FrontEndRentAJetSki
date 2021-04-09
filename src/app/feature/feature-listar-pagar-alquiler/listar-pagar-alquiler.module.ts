import { NgModule } from '@angular/core';
import { PagoAlquilerComponent } from './pago-alquiler/pago-alquiler.component';
import { ListadoAlquilerComponent } from './listado-alquiler/listado-alquiler.component';
import { ListarPagarAlquilerRoutingModule } from './listar-pagar-alquiler-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { ListadoPagoAlquilerComponent } from './listado-pago-alquiler/listado-pago-alquiler.component';


@NgModule({
  declarations: [
    PagoAlquilerComponent,
    ListadoAlquilerComponent,
    ListadoPagoAlquilerComponent
  ],

  imports: [
  ListarPagarAlquilerRoutingModule,
  SharedModule
  ]
})
export class ListarPagarAlquilerModule { }
