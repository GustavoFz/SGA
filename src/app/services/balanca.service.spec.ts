import { TestBed } from '@angular/core/testing';

import { BalancaService } from './balanca.service';

describe('BalancaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalancaService = TestBed.get(BalancaService);
    expect(service).toBeTruthy();
  });
});
