import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alquiler } from '../../alquiler/shared/model/alquiler';
import { AlquilerUsuarioRegistradoService } from './alquiler-usuario-registrado.service';


@Component({
  selector: 'app-alquiler-usuario-registrado',
  templateUrl: './alquiler-usuario-registrado.component.html',
  styleUrls: ['./alquiler-usuario-registrado.component.css']
})
export class AlquilerUsuarioRegistradoComponent implements OnInit {

    public respuesta: any;
	public alquiler: Alquiler;

  constructor(protected alquilerUsuarioRegistradoService: AlquilerUsuarioRegistradoService, protected router: Router) {

        this.alquiler = new Alquiler();
		const d = new Date();
		const currDate = d.getDate();
		const currMonth = d.getMonth() + 1;
		const currYear = d.getFullYear();
		const currHour = d.getHours();
		const currMin = d.getMinutes();
		const currSec = d.getSeconds();
		this.alquiler.fechaYHoraRenta = currYear + (currMonth > 9 ? '-' : '-0') + currMonth + (currDate > 9 ? '-' : '-0') + currDate + (currHour > 9 ? ' ' : 'T0') + currHour + (currMin > 9 ? ':' : ':0') + currMin + (currSec > 9 ? ':' : ':0') + currSec;

   }

  ngOnInit() {

  }
	public crearAlquiler() {

		this.alquilerUsuarioRegistradoService.registrarAlquilerUsuarioExistente(this.alquiler).subscribe(res => {
		this.respuesta = res;
		this.router.navigate(['/alquiler/listar-alquiler']);

	});
	}

}
