import { Component, OnInit } from '@angular/core';
import { ManejadorErrorService } from './../../../../shared/manejador-error.service';



@Component({
	selector: 'app-alquiler',
	templateUrl: './alquiler.component.html',
	styleUrls: ['./alquiler.component.css']
})

export class AlquilerComponent implements OnInit {

	public mensaje: string;
	public observable: any;

	constructor(protected manejadorErrorService: ManejadorErrorService) {
		this.observable = this.manejadorErrorService.subject.subscribe(res => {
			this.mensaje = res;
			
		});
	 }

	ngOnInit() {
		
	}
}
