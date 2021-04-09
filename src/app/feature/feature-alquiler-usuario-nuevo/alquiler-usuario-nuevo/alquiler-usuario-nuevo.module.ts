import { NgModule } from '@angular/core';
import { AlquilerUsuarioNuevoComponent } from './alquiler-usuario-nuevo.component';
import { AlquilerUsuarioNuevoRoutingModule } from './alquiler-usuario-nuevo-routing.module';
import { SharedModule } from './../../../shared/shared.module';


@NgModule({
  declarations: [
    AlquilerUsuarioNuevoComponent
  ],

  imports: [
  AlquilerUsuarioNuevoRoutingModule,
    SharedModule
  ]
})
export class AlquilerUsuarioNuevoModule { }
