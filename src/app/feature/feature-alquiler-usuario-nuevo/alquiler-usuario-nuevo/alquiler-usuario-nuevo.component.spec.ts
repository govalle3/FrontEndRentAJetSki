import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerUsuarioNuevoComponent } from './alquiler-usuario-nuevo.component';

describe('AlquilerUsuarioNuevoComponent', () => {
  let component: AlquilerUsuarioNuevoComponent;
  let fixture: ComponentFixture<AlquilerUsuarioNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilerUsuarioNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerUsuarioNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
