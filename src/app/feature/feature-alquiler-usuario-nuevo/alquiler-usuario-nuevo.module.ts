import { NgModule } from '@angular/core';
import { AlquilerUsuarioNuevoComponent } from './alquiler-usuario-nuevo/alquiler-usuario-nuevo.component';
import { SharedModule } from '../../shared/shared.module';
import { AlquilerUsuarioNuevoRoutingModule } from './alquiler-usuario-nuevo-routing.module';

import { AlquilerUsuarioNuevoService } from './alquiler-usuario-nuevo/alquiler-usuario-nuevo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    AlquilerUsuarioNuevoComponent
  ],

  imports: [

    AlquilerUsuarioNuevoRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [AlquilerUsuarioNuevoService]
})
export class AlquilerUsuarioNuevoModule { }
