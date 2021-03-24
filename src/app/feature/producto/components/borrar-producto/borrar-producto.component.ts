import { FormControl, FormGroup } from '@angular/forms';

import { Component, Input, OnInit } from '@angular/core';

import { ProductoService } from '@producto/shared/service/producto.service';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.css']
})

@Input('nationalId')
export class BorrarProductoComponent implements OnInit {
  form = new FormGroup({
    nationalId: new FormControl
  });

  get nationalId(): any {
    return this.form.get('nationalId');
  }
  
  
  constructor(protected productoServices: ProductoService) {
 
  
   }


  ngOnInit() {
  }

  pagar() {
    console.log(this.form.value);
    this.productoServices.pagar(this.form.value);
  }

}
