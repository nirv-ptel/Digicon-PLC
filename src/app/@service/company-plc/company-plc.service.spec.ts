import { TestBed } from '@angular/core/testing';

import { CompanyPlcService } from './company-plc.service';

describe('CompanyPlcService', () => {
  let service: CompanyPlcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyPlcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
