import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAlquilerComponent } from './listado-alquiler/listado-alquiler.component';
import { PagoAlquilerComponent } from './pago-alquiler/pago-alquiler.component';

const routes: Routes =
[
		{
		path: 'lista-alquiler',
		component: ListadoAlquilerComponent
		},
		{
		path: 'pago-alquiler',
		component: PagoAlquilerComponent
		}
			
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],

})
export class ListarPagarAlquilerRoutingModule { }
