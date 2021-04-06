import { AlquilerUsuarioService } from './shared/service/alquiler-usuario.service';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { PagarAlquilerComponent } from './components/pagar-alquiler/pagar-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';
import { CrearUsuarioAlquilerComponent } from './components/crear-usuario-alquiler/crear-usuario-alquiler.component';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { AlquilerRoutingModule } from './alquiler-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		CrearAlquilerComponent,
		CrearUsuarioAlquilerComponent,
		ListarAlquilerComponent,
		PagarAlquilerComponent,
		AlquilerComponent

	],

	imports: [
		AlquilerRoutingModule,
		SharedModule,
		FormsModule,
	],
	providers: [AlquilerUsuarioService]
})
export class AlquilerModule { }
