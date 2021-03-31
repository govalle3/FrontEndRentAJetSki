import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarAlquilerComponent } from './pagar-alquiler.component';

describe('PagarAlquilerComponent', () => {
  let component: PagarAlquilerComponent;
  let fixture: ComponentFixture<PagarAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagarAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
