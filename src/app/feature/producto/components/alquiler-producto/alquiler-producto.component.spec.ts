import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerProductoComponent } from './alquiler-producto.component';

describe('AlquilerUsuariosComponent', () => {
  let component: AlquilerProductoComponent;
  let fixture: ComponentFixture<AlquilerProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilerProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
