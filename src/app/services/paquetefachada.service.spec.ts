import { TestBed } from '@angular/core/testing';

import { PaquetefachadaService } from './paquetefachada.service';

describe('PaquetefachadaService', () => {
  let service: PaquetefachadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaquetefachadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
