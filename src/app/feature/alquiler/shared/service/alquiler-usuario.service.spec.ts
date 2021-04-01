import { TestBed } from '@angular/core/testing';

import { AlquilerUsuarioService } from './alquiler-usuario.service';

describe('AlquilerUsuarioService', () => {
  let service: AlquilerUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlquilerUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
