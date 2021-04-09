import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPagoAlquilerComponent } from './listado-pago-alquiler.component';

describe('ListadoPagoAlquilerComponent', () => {
  let component: ListadoPagoAlquilerComponent;
  let fixture: ComponentFixture<ListadoPagoAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPagoAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPagoAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
