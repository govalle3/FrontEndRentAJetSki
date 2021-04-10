import { Component, OnInit } from '@angular/core';
import { ManejadorErrorService } from '@shared/manejador-error.service';

@Component({
  selector: 'app-alquiler-lazy',
  templateUrl: './alquiler-lazy.component.html',
  styleUrls: ['./alquiler-lazy.component.css']
})
export class AlquilerLazyComponent implements OnInit {

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
