import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlquilerUsuarioRegistradoComponent } from './alquiler-usuario-registrado/alquiler-usuario-registrado.component';


const routes: Routes = [

  {
		path: 'registrado',
		component: AlquilerUsuarioRegistradoComponent

	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquilerUsuarioRegistradoRoutingModule { }
