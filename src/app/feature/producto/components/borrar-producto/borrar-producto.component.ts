import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProductoService } from '@producto/shared/service/producto.service';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.css']
})
export class BorrarProductoComponent implements OnInit {
  productoForm: FormGroup;

  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
  }

  pagar() {
    this.productoServices.pagar(this.productoForm.value);
  }

}
