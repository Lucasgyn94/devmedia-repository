import { TestBed } from '@angular/core/testing';

import { FatosHistoricosService } from './fatos-historicos.service';

describe('FatosHistoricosService', () => {
  let service: FatosHistoricosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatosHistoricosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
