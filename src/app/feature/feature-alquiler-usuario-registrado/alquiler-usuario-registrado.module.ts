import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquilerUsuarioRegistradoRoutingModule } from './alquiler-usuario-registrado-routing.module';
import { AlquilerUsuarioRegistradoComponent } from './alquiler-usuario-registrado/alquiler-usuario-registrado.component';


@NgModule({
  declarations: [AlquilerUsuarioRegistradoComponent],
  imports: [
    CommonModule,
    AlquilerUsuarioRegistradoRoutingModule
  ]
})
export class AlquilerUsuarioRegistradoModule { }
