import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlquilerUsuarioNuevoComponent } from './alquiler-usuario-nuevo/alquiler-usuario-nuevo.component';

const routes: Routes =
[
	{
		path: '',
		component: AlquilerUsuarioNuevoComponent

	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlquilerUsuarioNuevoRoutingModule { }
