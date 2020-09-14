import { TestBed } from '@angular/core/testing';

import { FacturafachadaService } from './facturafachada.service';

describe('FacturafachadaService', () => {
  let service: FacturafachadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturafachadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
