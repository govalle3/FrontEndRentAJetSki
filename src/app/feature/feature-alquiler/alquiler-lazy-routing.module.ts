import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlquilerLazyComponent } from './alquiler-lazy/alquiler-lazy.component';

const routes: Routes = 
[
  {
		path: '',
		component: AlquilerLazyComponent,
    children: 
    [
      {
        path: 'alquiler-usuario-nuevo',
         loadChildren: () => import('./../feature-alquiler-usuario-nuevo/alquiler-usuario-nuevo.module').then(mod => mod.AlquilerUsuarioNuevoModule)
      },
      {
      path: 'alquiler-usuario-registrado',
      loadChildren: () => import('./../feature-alquiler-usuario-registrado/alquiler-usuario-registrado.module').then(mod => mod.AlquilerUsuarioRegistradoModule) 
      }
    ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class AlquilerLazyRoutingModule { }
