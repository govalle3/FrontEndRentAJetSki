import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoAlquilerComponent } from './pago-alquiler.component';

describe('PagoAlquilerComponent', () => {
  let component: PagoAlquilerComponent;
  let fixture: ComponentFixture<PagoAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
