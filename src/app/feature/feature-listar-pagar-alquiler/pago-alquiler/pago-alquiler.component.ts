import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListarPagarAlquilerService } from '../listar-pagar-alquiler.service';


@Component({
  selector: 'app-pago-alquiler',
  templateUrl: './pago-alquiler.component.html',
  styleUrls: ['./pago-alquiler.component.css']
})
export class PagoAlquilerComponent implements OnInit {

  public total: number;
	public respuesta: string;
	public cedula: number;

  constructor(protected listarPagarAlquilerService: ListarPagarAlquilerService, protected router: Router) {
    if (sessionStorage.getItem('cedula')) {
			this.cedula = JSON.parse(sessionStorage.getItem('cedula'));
			this.traerDatosParaPago(this.cedula);
		} else {
			this.cedula = this.cedula;
		}
   }

  ngOnInit(): void {
  }

  public traerDatosParaPago(cedula: number) {
		this.listarPagarAlquilerService.pagar(cedula).subscribe(res => {
		this.total = res;
		console.log(this.total);
	});
}
public pagar(cedula: number) {
  this.listarPagarAlquilerService.actualizarDatosDePago(cedula).subscribe(res => {
  this.respuesta = res + '';
  this.router.navigate(['/listar-pagar-alquiler/lista-alquiler']);
});
}
}
