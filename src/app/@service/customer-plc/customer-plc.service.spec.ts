import { TestBed } from '@angular/core/testing';

import { CustomerPlcService } from './customer-plc.service';

describe('CustomerPlcService', () => {
  let service: CustomerPlcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerPlcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
