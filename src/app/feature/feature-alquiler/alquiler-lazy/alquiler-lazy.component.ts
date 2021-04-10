import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alquiler-lazy',
  templateUrl: './alquiler-lazy.component.html',
  styleUrls: ['./alquiler-lazy.component.css']
})
export class AlquilerLazyComponent implements OnInit {

  public mensaje: string;

  constructor() { }

  ngOnInit(): void {
  }

}
