import { TestBed } from '@angular/core/testing';

import { MethodPlcService } from './method-plc.service';

describe('MethodPlcService', () => {
  let service: MethodPlcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodPlcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
