import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { PagarAlquilerComponent } from './components/pagar-alquiler/pagar-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';
import { CrearUsuarioAlquilerComponent } from './components/crear-usuario-alquiler/crear-usuario-alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
[
	{
		path: '',
		component: AlquilerComponent,
		children:
		[
			{
				path: 'crear-alquiler',
				component: CrearAlquilerComponent
			},
			{
				path: 'crear-usuario-alquiler',
				component: CrearUsuarioAlquilerComponent
			},
			{
				path: 'listar-alquiler',
				component: ListarAlquilerComponent
			},
			{
				path: 'pagar-alquiler',
				component: PagarAlquilerComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],

})
export class AlquilerRoutingModule {}
