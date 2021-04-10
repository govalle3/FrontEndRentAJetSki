import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerUsuarioRegistradoComponent } from './alquiler-usuario-registrado.component';

describe('AlquilerUsuarioRegistradoComponent', () => {
  let component: AlquilerUsuarioRegistradoComponent;
  let fixture: ComponentFixture<AlquilerUsuarioRegistradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilerUsuarioRegistradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerUsuarioRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
