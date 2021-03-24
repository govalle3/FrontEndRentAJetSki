import { Component,  OnInit } from '@angular/core';

import { ProductoService } from '@producto/shared/service/producto.service';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.css']
})



export class BorrarProductoComponent implements OnInit {
  public total: number;
  public nationalId: number;

  
  constructor(protected productoServices: ProductoService) {
  
   }

  ngOnInit() {
    
  }

  pagar(nationalId: number) {
    console.log(nationalId);
    this.productoServices.pagar(nationalId).subscribe(res => {
      this.total = res;
      console.log(this.total);
  });
  
}
}
