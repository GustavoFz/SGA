import { TestBed } from '@angular/core/testing';

import { FerramentaService } from './ferramenta.service';

describe('FerramentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FerramentaService = TestBed.get(FerramentaService);
    expect(service).toBeTruthy();
  });
});
