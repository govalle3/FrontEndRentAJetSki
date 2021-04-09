import { NgModule } from '@angular/core';
import { AlquilerUsuarioNuevoComponent } from './alquiler-usuario-nuevo.component';
import { SharedModule } from './../../../shared/shared.module';


@NgModule({
  declarations: [
    AlquilerUsuarioNuevoComponent
  ],

  imports: [
    SharedModule
  ]
})
export class AlquilerUsuarioNuevoModule { }
