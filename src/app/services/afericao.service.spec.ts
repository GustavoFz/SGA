import { TestBed } from '@angular/core/testing';

import { AfericaoService } from './afericao.service';

describe('AfericaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfericaoService = TestBed.get(AfericaoService);
    expect(service).toBeTruthy();
  });
});
