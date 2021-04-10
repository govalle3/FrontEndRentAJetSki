import { NgModule } from '@angular/core';
import { AlquilerLazyComponent } from './alquiler-lazy/alquiler-lazy.component';
import { AlquilerLazyRoutingModule } from './alquiler-lazy-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AlquilerLazyComponent
  ],
  imports: [
  
    SharedModule,
    AlquilerLazyRoutingModule
  ]
})
export class AlquilerLazyModule { }
